import type { RainumAlert, TransactionPreview } from "./types";

export type RainumStreamEvent =
  | {
      type: "new_block";
      blockId: number;
      hash: string;
      timestamp: number;
      transactions: number;
    }
  | {
      type: "new_transaction";
      direction: "inbound" | "outbound";
      address: string;
      transaction: TransactionPreview;
    }
  | {
      type: "balance_update";
      address: string;
      oldBalance: number;
      newBalance: number;
    }
  | {
      type: "validator_update";
      address: string;
      stake: number;
      tier: number;
      status: string;
    }
  | {
      type: "alert";
      payload: RainumAlert;
    };

export type RainumStreamCallbacks = {
  onEvent: (event: RainumStreamEvent) => void;
  onError?: (error: Event | Error) => void;
  onOpen?: () => void;
};

export function connectToRainumStream(
  url: string,
  callbacks: RainumStreamCallbacks,
) {
  let ws: WebSocket | null = null;
  let reconnectAttempts = 0;

  const connect = () => {
    ws = new WebSocket(url);

    ws.addEventListener("open", () => {
      reconnectAttempts = 0;
      callbacks.onOpen?.();
    });

    ws.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse(event.data) as RainumStreamEvent;
        callbacks.onEvent(payload);
      } catch (error) {
        callbacks.onError?.(
          error instanceof Error ? error : new Error("Invalid stream payload"),
        );
      }
    });

    ws.addEventListener("close", () => {
      // Exponential backoff up to 30 seconds
      const timeout = Math.min(30_000, 2 ** reconnectAttempts * 1000);
      reconnectAttempts += 1;
      setTimeout(connect, timeout);
    });

    ws.addEventListener("error", (error) => {
      callbacks.onError?.(error);
    });
  };

  connect();

  return () => {
    ws?.close();
  };
}
