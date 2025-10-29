"use client";

import { useEffect, useMemo, useState } from "react";
import { connectToRainumStream } from "@/lib/api/realtime";
import { getRainumClient } from "@/lib/api/client";
import type { RainumMetrics, RainumAlert, TransactionPreview } from "@/lib/api/types";

type LiveMetricsState = {
  metrics: RainumMetrics | null;
  alerts: RainumAlert[];
  recentTransactions: TransactionPreview[];
  loading: boolean;
};

const MAX_RECENT_TRANSACTIONS = 12;

export function useLiveMetrics(address?: string) {
  const [state, setState] = useState<LiveMetricsState>({
    metrics: null,
    alerts: [],
    recentTransactions: [],
    loading: true,
  });

  const client = useMemo(() => getRainumClient(), []);

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        const metrics = await client.getInvestorMetrics();

        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            metrics,
            alerts: metrics.alerts,
            loading: false,
          }));
        }
      } catch (error) {
        console.error("Failed to load Rainum metrics", error);
        if (!cancelled) {
          setState((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    bootstrap();

    const streamUrl = address
      ? `${client.websocketUrl}?address=${address}`
      : client.websocketUrl;

    const disconnect = connectToRainumStream(streamUrl, {
      onOpen: () => {
        setState((prev) => ({ ...prev, loading: false }));
      },
        onEvent: (event) => {
          setState((prev) => {
            switch (event.type) {
              case "alert":
                return {
                  ...prev,
                  alerts: [event.payload, ...prev.alerts].slice(0, 10),
                };
              case "new_transaction":
                return {
                  ...prev,
                  recentTransactions: [
                    {
                      ...event.transaction,
                      status: "pending",
                    },
                    ...prev.recentTransactions,
                  ].slice(0, MAX_RECENT_TRANSACTIONS),
                };
              case "new_block":
                if (!prev.metrics) return prev;
                return {
                  ...prev,
                  metrics: {
                    ...prev.metrics,
                    network: {
                      ...prev.metrics.network,
                      tps:
                        prev.metrics.network.tps * 0.8 +
                        (event.transactions / 2) * 0.2,
                    },
                  },
                };
              case "balance_update":
              case "validator_update":
              default:
                return prev;
            }
          });
        },
      onError: (error) => {
        console.warn("Rainum stream error", error);
      },
    });

    return () => {
      cancelled = true;
      disconnect();
    };
  }, [address, client]);

  return state;
}
