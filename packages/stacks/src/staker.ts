import {
  StacksTransaction,
  makeUnsignedContractCall,
  cloneDeep,
  intoInitialSighashAuth
} from '@stacks/transactions'
import { StacksTestnet, StacksMainnet, StacksDevnet, StacksNetwork } from '@stacks/network'
import { StackingClient } from "@stacks/stacking"
// import { * } from './tx'
import type { Signer } from '@chorus-one/signer'
import { StacksNetworkConfig, StacksTxStatus } from './types'

/**
 * This class provides the functionality to stake and unstake for Stacks blockchains.
 *
 * It also provides the ability to retrieve staking information for an account.
 */
export class StacksStaker {
  private readonly networkConfig: StacksNetworkConfig
  private network?: 'testnet' | 'nakamotoTestnet' | 'mainnet' | 'devnet'
  private networkClient: StacksNetwork
  private poolAddress: string
  private poolClient: StackingClient

  /**
   * Creates a StacksStaker instance.
   *
   * @param params - Initialization configuration
   * @param params.rpcUrl - The URL of the Stacks network RPC endpoint
   *
   * @returns  An instance of SolanaStaker.
   */
  constructor (params: {
    rpcUrl: string
    network: 'testnet' | 'nakamotoTestnet' | 'mainnet' | 'devnet'
    poolAddress: string
  }) {
    const { ...networkConfig } = params

    this.networkConfig = networkConfig
    this.network = networkConfig.network || 'testnet'
    this.poolAddress = networkConfig.poolAddress
  }

  /**
   * Initializes the StacksStaker instance and connects to the blockchain.
   *
   * @returns A promise which resolves once the SolanaStaker instance has been initialized.
   */
  async init (): Promise<void> {
    switch (this.network) {
      case 'nakamotoTestnet':
        this.networkClient = new StacksTestnet({ url: this.networkConfig.rpcUrl })
        break
      case 'mainnet':
        this.networkClient = new StacksMainnet()
        break
      case 'devnet':
        this.networkClient = new StacksDevnet()
        break
      case 'testnet':
      default:
        this.networkClient = new StacksTestnet()
    }
    this.poolClient = new StackingClient(this.poolAddress, this.networkClient);
  }

  /**
   * Builds a staking transaction.
   *
   * @param params - Parameters for building the transaction
   * @param params.amountMicroStx - The amount to stake, specified in microSTX.
   * @param params.publicKey - The public key of the staker account.
   *
   * @returns Returns a promise that resolves to a Stacks staking transaction.
   */
  async buildDelegateStx(params: {
    amountMicroStx: string
    key_s: string | string[]
  }): Promise<StacksTransaction> {
    const { amountMicroStx, key_s } = params;
    const delegateTo = this.poolAddress
    const client = this.poolClient

    const poxInfo = await client.getPoxInfo();
    const poxOperationInfo = await client.getPoxOperationInfo(poxInfo);

    const contract = await client.getStackingContract(poxOperationInfo);

    const callOptions = client.getDelegateOptions({
      contract,
      amountMicroStx,
      delegateTo,
    });

    if (typeof key_s === 'string') {
      // single-sig
      const publicKey = key_s;
      return await makeUnsignedContractCall({ publicKey, ...callOptions })
    } else {
      // multi-sig
      const publicKeys = key_s;
      const numSignatures = key_s.length;
      console.log("Signing for multi-sig is NOT supported yet!")
      return await makeUnsignedContractCall({ publicKeys, numSignatures, ...callOptions })
    }
  }

  /**
   * Signs a transaction using the provided signer.
   *
   * @param params - Parameters for the signing process
   * @param params.signer - A signer instance.
   * @param params.signerAddress - The address of the signer
   * @param params.tx - The transaction to sign
   *
   * @returns A promise that resolves to an object containing the signed transaction.
   */
  async sign (params: {
    signer: Signer
    signerAddress: string
    tx: StacksTransaction
  }): Promise<{ signedTx: any }> {
    const client = this.poolClient
    const { signer, signerAddress, tx } = params

    const sigHash = tx.signBegin()
    // const nextSighash = tx.signNextOrigin(sigHash, privateKey)

    // const message = tx.serialize()
    // const { sig, pk } = await signer.sign(signerAddress, { message })

    // return { signedTx: 0 }
  }

  /**
   * Broadcasts a signed transaction to the network.
   *
   * @param params - Parameters for the broadcast process
   * @param params.signedTx - The signed transaction to broadcast
   *
   * @returns A promise that resolves to the final execution outcome of the broadcast transaction.
   *
   */
  async broadcast (params: { signedTx: any }): Promise<{
    txHash: string
  }> {
    const client = this.poolClient
    const { signedTx } = params

    // https://docs.hiro.so/stacks/stacks.js/guides/broadcast-transactions#broadcasting-the-transaction
    return { txHash: 'dummy' };
  }

  /**
   * Retrieves the status of a transaction using the transaction hash.
   *
   * @param params - Parameters for the transaction status request
   * @param params.txHash - The transaction hash to query
   *
   * @returns A promise that resolves to an object containing the transaction status.
   */
  async getTxStatus (params: { txHash: string }): Promise<StacksTxStatus> {
    const client = this.poolClient
    const { txHash } = params

    // https://docs.hiro.so/stacks/stacks.js/guides/broadcast-transactions#handle-the-results
    // const tx = await ??(txHash??)
    const tx: any = {};
    tx.code = 0;

    if (tx === null) {
      return { status: 'unknown', receipt: null }
    }

    if (tx.code !== 0) {
      return { status: 'failure', receipt: tx }
    }

    return { status: 'success', receipt: tx }
  }
}
