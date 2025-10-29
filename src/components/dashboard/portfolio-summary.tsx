"use client";

import { useMemo } from "react";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import type { WalletSnapshot } from "@/lib/api/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PortfolioSummaryProps = {
  snapshot: WalletSnapshot;
};

export function PortfolioSummary({ snapshot }: PortfolioSummaryProps) {
  const totals = useMemo(() => {
    const nativeShare =
      (snapshot.assets.find((asset) => asset.tokenType === "native")?.fiatValue ?? 0) /
      snapshot.totalValue;
    const privateCount = snapshot.recentTransactions.filter(
      (tx) => tx.privacyLevel !== "none",
    ).length;

    return { nativeShare, privateCount };
  }, [snapshot]);

  const changePositive = snapshot.change24h >= 0;

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(76,201,240,0.3),transparent)] blur-2xl" />
      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-white/40">
              Portefølje værdi
            </span>
            <div className="mt-3 flex items-end gap-4">
              <h3 className="text-4xl font-semibold text-white">
                ${snapshot.totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </h3>
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
                  changePositive
                    ? "bg-emerald-400/15 text-emerald-200"
                    : "bg-rose-400/15 text-rose-200",
                )}
              >
                {changePositive ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {snapshot.change24h.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 text-sm text-white/70 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                Native RAIN eksponering
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {(totals.nativeShare * 100).toFixed(1)}%
              </p>
              <p className="mt-1 text-xs text-white/50">
                Cross-VM balance forankret i REVM og Move
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                Zero-knowledge transaktioner (24h)
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {totals.privateCount}
              </p>
              <p className="mt-1 text-xs text-white/50">
                Groth16 beviser verificeret on-chain
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                Aktive staking-valideringer
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {snapshot.staking.filter((stake) => stake.status === "active").length}
              </p>
              <p className="mt-1 text-xs text-white/50">
                HotStuff Tier 3 med VRF og BLS aggregation
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:min-w-[240px]">
          <Button variant="gradient" glow>
            Opret transaktion
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="secondary">Eksporter rapport</Button>
        </div>
      </div>
    </Card>
  );
}
