import { Hex, encodeFunctionData } from 'viem'
import { VaultABI } from '../contracts/vaultAbi'
import { Transaction } from '../types/transaction'
import { StakewiseConnector } from '../connector'

export async function buildBurnTx (request: {
  connector: StakewiseConnector
  userAccount: Hex
  vault: Hex
  amount: bigint
}): Promise<Transaction> {
  const { userAccount, vault, amount } = request

  const tx = encodeFunctionData({
    abi: VaultABI,
    functionName: 'burnOsToken',
    args: [amount]
  })

  return {
    account: userAccount,
    to: vault,
    data: tx
  }
}