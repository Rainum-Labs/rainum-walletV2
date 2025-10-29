import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(66,244,255,0.28),transparent_70%)] blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse gap-16 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-8">
          <Badge tone="aqua" soft className="text-sm">
            Investor preview · Dual-VM · 85K+ TPS
          </Badge>
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Den smukkeste måde at styre Rainum blockchain på
          </h1>
          <p className="text-lg text-white/70">
            Rainum Wallet V2 samler cross-chain bridge, staking, governance og
            zero-knowledge privacy i én glassmorph oplevelse. Bygget direkte på
            vores HotStuff + Move/EVM backbone.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Button variant="gradient" glow className="w-full sm:w-auto" asChild>
              <Link href="/login">
                Åbn wallet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <Link href="#platform">
                <PlayCircle className="h-4 w-4" />
                Se investor demo
              </Link>
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm text-white/60 sm:grid-cols-4">
            <div>
              <dt>Atomic cross-VM</dt>
              <dd className="text-2xl font-semibold text-white">JIT compiler</dd>
            </div>
            <div>
              <dt>Bridge sikkerhed</dt>
              <dd className="text-2xl font-semibold text-white">Timelock + BLS</dd>
            </div>
            <div>
              <dt>ZKP privacy</dt>
              <dd className="text-2xl font-semibold text-white">Groth16</dd>
            </div>
            <div>
              <dt>Observability</dt>
              <dd className="text-2xl font-semibold text-white">SOC2-ready</dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-3xl">
            <div className="flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/60 p-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Network pulse
                </p>
                <h3 className="text-5xl font-bold text-white">85,324 TPS</h3>
                <p className="text-sm text-white/60">
                  HotStuff consensus · Block finalitet 1.8s · Stake-weighted gossip
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
                <p>Next multi-chain transfer unlocks in 38m · 67 validator attestations</p>
                <p>Parallel execution conflicts: 0 · GPU proof batching: ON</p>
              </div>
              <p className="text-xs text-white/40">
                Data streamet direkte fra Rainum advanced monitoring stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
