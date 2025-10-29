import { cache } from "react";
import type {
  RainumApiConfig,
  WalletSnapshot,
  RainumMetrics,
  BridgeTransfer,
  GovernanceProposal,
  FeeTierQuote,
} from "./types";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

const DEFAULT_TIMEOUT_MS = 12_000;

export class RainumClient {
  constructor(protected readonly config: RainumApiConfig) {}

  static fromEnv(overrides: Partial<RainumApiConfig> = {}) {
    return new RainumClient({
      restEndpoint:
        overrides.restEndpoint ??
        process.env.NEXT_PUBLIC_RAINUM_REST_ENDPOINT ??
        "https://api.rainum.io",
      rpcEndpoint:
        overrides.rpcEndpoint ??
        process.env.NEXT_PUBLIC_RAINUM_RPC_ENDPOINT ??
        "https://rpc.rainum.io",
      websocketUrl:
        overrides.websocketUrl ??
        process.env.NEXT_PUBLIC_RAINUM_WS_ENDPOINT ??
        "wss://stream.rainum.io/ws",
      apiKey: overrides.apiKey ?? process.env.NEXT_PUBLIC_RAINUM_API_KEY,
      jwt: overrides.jwt,
    });
  }

  private withAuth(init: RequestInit = {}): RequestInit {
    const headers = new Headers(init.headers);

    if (this.config.apiKey) {
      headers.set("x-rainum-api-key", this.config.apiKey);
    }

    if (this.config.jwt) {
      headers.set("authorization", `Bearer ${this.config.jwt}`);
    }

    headers.set("content-type", "application/json");

    return {
      ...init,
      headers,
    };
  }

  private async request<T>(
    path: string,
    method: HttpMethod = "GET",
    body?: unknown,
  ): Promise<T> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

    try {
      const response = await fetch(`${this.config.restEndpoint}${path}`, {
        ...this.withAuth({
          method,
          body: body ? JSON.stringify(body) : undefined,
          cache: "no-store",
          signal: controller.signal,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `Rainum API error (${response.status}): ${errorBody || response.statusText}`,
        );
      }

      return (await response.json()) as T;
    } finally {
      clearTimeout(timeout);
    }
  }

  getWalletSnapshot = cache(async (address: string) => {
    return this.request<WalletSnapshot>(`/wallets/${address}/snapshot`);
  });

  getInvestorMetrics = cache(async () => {
    return this.request<RainumMetrics>("/metrics/investor-dashboard");
  });

  getBridgeTransfers = cache(async (address: string) => {
    return this.request<BridgeTransfer[]>(`/wallets/${address}/bridge`);
  });

  getGovernanceProposals = cache(async () => {
    return this.request<GovernanceProposal[]>("/governance/proposals");
  });

  getFeeQuotes = cache(async () => {
    return this.request<FeeTierQuote[]>("/gas/quotes");
  });

  async broadcastTransaction(payload: unknown) {
    return this.request<{ hash: string }>("/transactions/broadcast", "POST", {
      payload,
    });
  }

  async initiateBridgeTransfer(payload: unknown) {
    return this.request<BridgeTransfer>("/bridge/transfer", "POST", payload);
  }

  async initiateStakingAction(payload: unknown) {
    return this.request("/staking/action", "POST", payload);
  }

  get websocketUrl() {
    return this.config.websocketUrl;
  }

  get restEndpoint() {
    return this.config.restEndpoint;
  }
}

export const getRainumClient = () => RainumClient.fromEnv();
