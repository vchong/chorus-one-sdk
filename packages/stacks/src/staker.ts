import { StacksTransaction, makeUnsignedContractCall } from '@stacks/transactions'
import { StacksTestnet, StacksMainnet, StacksDevnet, StacksNetwork } from '@stacks/network'
import { StackingClient } from "@stacks/stacking"
// import { * } from './tx'
// import type { Signer } from '@chorus-one/signer'
import { StacksNetworkConfig } from './types'

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
    publicKey: string
  }): Promise<StacksTransaction> {
    const { amountMicroStx, publicKey } = params;
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

    return await makeUnsignedContractCall({ publicKey, ...callOptions })
  }
}
