import { ArrowRightLeft, Clock3, Lock } from "lucide-react";
import type { BridgeTransfer } from "@/lib/api/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type BridgeOverviewProps = {
  transfers: BridgeTransfer[];
};

const statusColor: Record<BridgeTransfer["status"], "aqua" | "amber" | "critical" | "neutral"> = {
  pending: "amber",
  attesting: "amber",
  confirmed: "aqua",
  executing: "aqua",
  completed: "aqua",
  failed: "critical",
};

export function BridgeOverview({ transfers }: BridgeOverviewProps) {
  return (
    <Card>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <ArrowRightLeft className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Cross-chain Bridge Pipeline
            </h3>
            <p className="text-sm text-white/60">
              Timelocked udsendelser med BLS attestationer og HTLC garanti.
            </p>
          </div>
        </div>
        <Button variant="ghost">Åbn bridge kontrolrum</Button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {transfers.map((transfer) => (
          <div
            key={transfer.id}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  {transfer.direction === "lock" ? "Locked" : "Unlock"}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  {transfer.amount.toLocaleString()} {transfer.token}
                </h4>
                <p className="mt-1 text-xs text-white/50">
                  {transfer.sourceChain} → {transfer.destinationChain}
                </p>
              </div>
              <Badge tone={statusColor[transfer.status]}>
                {transfer.status.toUpperCase()}
              </Badge>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5" />
                {new Date(transfer.createdAt).toLocaleTimeString()}
              </span>
              <span className="inline-flex items-center gap-2">
                <Lock className="h-3.5 w-3.5" />
                {transfer.securityLevel}
              </span>
              <span className="inline-flex items-center gap-2">
                ID {transfer.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
