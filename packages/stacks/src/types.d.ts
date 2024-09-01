import { Keypair, Transaction, TransactionResponse, Commitment } from '@solana/web3.js'

/** @ignore */
export interface StacksSigningData {
  tx: ?
}

/** @ignore */
export interface StacksNetworkConfig {
  // e.g. https://api.hiro?.com
  rpcUrl: string
}

/** @ignore */
export interface StacksTxStatus {
  status: 'success' | 'failure' | 'pending' | 'unknown'
  receipt: ? | null
}
