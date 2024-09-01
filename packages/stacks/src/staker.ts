import { makeContractCall, StacksTestnet, broadcastTransaction, uintCV } from '@stacks/transactions';
import { StacksMainnet } from '@stacks/network';

/**
 * This class provides the functionality to stake and unstake for Stacks blockchains.
 *
 * It also provides the ability to retrieve staking information for an account.
 */
export class StacksStaker {
  private readonly networkConfig: StacksNetworkConfig

  /**
   * Builds a staking transaction.
   *
   * @param params - Parameters for building the transaction
   * @param params.amount - The amount to stake, specified in ?
   *
   * @returns Returns a promise that resolves to a SOLANA staking transaction.
   */
  async buildStakeTx(params: {
    amount: string,
    delegatorAddress: string,
    stakingContractAddress: string,
    stakingContractName: string,
    functionName: string,
    network: 'testnet' | 'mainnet'
  }): Promise<{ tx: string }> {
    const { amount, delegatorAddress, stakingContractAddress, stakingContractName, functionName, network } = params;

    const networkObj = network === 'mainnet' ? new StacksMainnet() : new StacksTestnet();

    const txOptions = {
      contractAddress: stakingContractAddress,
      contractName: stakingContractName,
      functionName: functionName,
      functionArgs: [uintCV(amount)],
      senderKey: delegatorAddress, // This should be the private key, not the address
      validateWithAbi: true,
      network: networkObj
    };

    const transaction = await makeContractCall(txOptions);
    const broadcastResponse = await broadcastTransaction(transaction, networkObj);

    if (broadcastResponse.ok) {
      return { tx: broadcastResponse.txid };
    } else {
      throw new Error(`Failed to broadcast staking transaction: ${broadcastResponse.error}`);
    }
  }
}
