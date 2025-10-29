export type VmType = "evm" | "move";

export type PrivacyLevel = "none" | "amount" | "partial" | "full";

export interface WalletAsset {
  symbol: string;
  name: string;
  balance: number;
  fiatValue: number;
  change24h: number;
  tokenType: "native" | "wrapped" | "governance" | "nft";
  vmType: VmType;
}

export interface StakingPosition {
  validatorAddress: string;
  validatorName: string;
  stake: number;
  rewards24h: number;
  apy: number;
  status: "active" | "unbonding" | "pending";
  tier: 1 | 2 | 3;
  unlockTimestamp?: number;
}

export interface GovernanceProposal {
  id: number;
  title: string;
  category: "Parameter Change" | "Validator Slash" | "Treasury Spend" | "Protocol Upgrade";
  status: "Voting" | "Passed" | "Rejected" | "Executed";
  votesFor: number;
  votesAgainst: number;
  quorum: number;
  votingEndsAt: number;
  proposer: string;
}

export interface BridgeTransfer {
  id: string;
  direction: "lock" | "unlock";
  sourceChain: string;
  destinationChain: string;
  amount: number;
  token: string;
  status: "pending" | "attesting" | "confirmed" | "executing" | "completed" | "failed";
  createdAt: number;
  updatedAt: number;
  securityLevel: "standard" | "time-locked" | "requires-approvals";
}

export interface RainumAlert {
  id: string;
  severity: "info" | "warning" | "critical";
  title: string;
  message: string;
  timestamp: number;
  resolved: boolean;
  metadata?: Record<string, string | number>;
}

export interface ChainNetworkHealth {
  tps: number;
  finalityMs: number;
  consensus: "HotStuff" | "Narwhal-Bullshark";
  peers: number;
  mempoolDepth: number;
  qosExpress: number;
  qosStandard: number;
  qosEconomy: number;
}

export interface FeeTierQuote {
  tier: "express" | "standard" | "economy";
  gasPrice: number;
  estimatedConfirmationSeconds: number;
}

export interface TransactionPreview {
  hash: string;
  from: string;
  to: string;
  amount: number;
  vmType: VmType;
  privacyLevel: PrivacyLevel;
  fee: number;
  timestamp: number;
  status: "pending" | "finalized" | "failed";
}

export interface WalletSnapshot {
  address: string;
  totalValue: number;
  change24h: number;
  assets: WalletAsset[];
  staking: StakingPosition[];
  governance: GovernanceProposal[];
  bridgeTransfers: BridgeTransfer[];
  recentTransactions: TransactionPreview[];
}

export interface RainumMetrics {
  network: ChainNetworkHealth;
  alerts: RainumAlert[];
  feeQuotes: FeeTierQuote[];
}

export interface RainumApiConfig {
  restEndpoint: string;
  rpcEndpoint: string;
  websocketUrl: string;
  apiKey?: string;
  jwt?: string;
}
