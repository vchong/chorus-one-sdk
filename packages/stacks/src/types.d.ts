import {
  StacksTransaction,
  TxBroadcastResult
} from '@stacks/transactions';

/** @ignore */
export interface StacksSigningData {
  tx: StacksTransaction
}

/** @ignore */
export interface StacksNetworkConfig {
  // e.g. https://api.hiro?.com
  rpcUrl: string
  network: 'testnet' | 'nakamotoTestnet' | 'mainnet' | 'devnet'
  poolAddress: string
}

/** @ignore */
export interface StacksTxStatus {
  status: 'success' | 'failure' | 'pending' | 'unknown'
  receipt: TxBroadcastResult | null
}
