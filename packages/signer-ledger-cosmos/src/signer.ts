import { nopLogger } from '@chorus-one/utils'
import type { Logger } from '@chorus-one/utils'
import { sortObjectByKeys } from '@chorus-one/utils'
import type { LedgerCosmosSignerConfig } from './types'
import type { Signature, SignerData } from '@chorus-one/signer'
import { secp256k1 } from '@noble/curves/secp256k1'
import CosmosApp from '@zondax/ledger-cosmos-js'
import Transport from '@ledgerhq/hw-transport'

/**
 * The LedgerCosmosSigner in the Chorus One SDK is a specialized implementation of the Signer interface that
 * utilizes a Ledger Cosmos App
 *
 * Ledger is known for its advanced security features, including secure hardware wallets and robust key management,
 * making it an ideal choice for retail and enterprise customers
 */
export class LedgerCosmosSigner {
  private readonly config: LedgerCosmosSignerConfig
  private readonly transport: Transport
  private accounts: Map<string, { hdPath: string; publicKey: Uint8Array }>
  private app?: CosmosApp
  private logger: Logger

  /**
   * Constructs a new LedgerCosmosSigner.
   *
   * @param params - The parameters required to initialize the LedgerCosmosSigner
   * @param params.accounts - An array of account objects, each containing an HD path
   * @param params.bechPrefix - Address prefix (e.g. celestia)
   * @param params.logger - (Optional) A logger to use for logging messages, i.e `console`
   *
   * @returns A new instance of LedgerCosmosSigner.
   */
  constructor (params: { transport: Transport; accounts: [{ hdPath: string }]; bechPrefix: string; logger?: Logger }) {
    const { transport, ...config } = params

    this.transport = transport
    this.config = config
    this.logger = params.logger ?? nopLogger
    this.accounts = new Map()
  }

  /**
   * Initializes the signer, performing any necessary setup or configuration.
   * @returns A promise that resolves once the initialization is complete.
   */
  async init (): Promise<void> {
    const app = new CosmosApp(this.transport)
    this.app = app

    this.config.accounts.forEach(async (account: { hdPath: string }) => {
      const response = await app.getAddressAndPubKey(account.hdPath, this.config.bechPrefix)

      this.accounts.set(response.bech32_address.toLowerCase(), {
        hdPath: account.hdPath,
        publicKey: response.compressed_pk
      })
    })
  }

  /**
   * Signs the provided data using the private key associated with the signer's address.
   *
   * @param signerAddress - The address of the signer
   * @param signerData - The data to be signed, which can be a raw message or custom data
   *
   * @returns A promise that resolves to an object containing the signature and public key.
   */
  async sign (signerAddress: string, signerData: SignerData): Promise<{ sig: Signature; pk: Uint8Array }> {
    if (this.app === undefined) {
      throw new Error('LedgerCosmosSigner not initialized. Did you forget to call init()?')
    }
    this.logger.info(`signing data from address: ${signerAddress} with Ledger Cosmos App`)

    if (signerData.message === undefined) {
      throw new Error('missing message to sign')
    }

    const account = this.getAccount(signerAddress)

    const { signature } = await this.app.sign(
      account.hdPath,
      Buffer.from(JSON.stringify(sortObjectByKeys(signerData.data.signDoc)), 'utf-8'),
      this.config.bechPrefix,
      0 // 0 for JSON, 1 for TEXTUAL
    )

    if (signature.length === 0) {
      throw new Error(`failed to sign message`)
    }

    const secpsig = secp256k1.Signature.fromDER(signature)
    const sig = {
      fullSig: secpsig.toCompactHex(),
      r: Buffer.from(secpsig.toCompactRawBytes().subarray(0, 32)).toString('hex'),
      s: Buffer.from(secpsig.toCompactRawBytes().subarray(32, 64)).toString('hex'),
      v: 0
    }

    return { sig, pk: account.publicKey }
  }

  /**
   * Retrieves the public key associated with the signer's address.
   *
   * @param address - The address of the signer
   *
   * @returns A promise that resolves to a Uint8Array representing the public key.
   */
  async getPublicKey (address: string): Promise<Uint8Array> {
    return this.getAccount(address).publicKey
  }

  private getAccount (address: string): { hdPath: string; publicKey: Uint8Array } {
    const account = this.accounts.get(address.toLowerCase())
    if (account === undefined) {
      throw new Error(`no account found for address: ${address}`)
    }

    return account
  }
}
