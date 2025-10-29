import { ArrowRight, Binary, Box, Radar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const capabilityItems = [
  {
    title: "Intelligent Wallet Core",
    description:
      "Klient-side key vault med AES-256-GCM, PBKDF2 forstærkning og hardware wallet fallback via WebHID.",
    icon: ShieldCheck,
  },
  {
    title: "Cross-Chain Operations",
    description:
      "Bridge manager visualiserer attestationer, HTLC flow og time-locked withdrawals for Ethereum, Solana og Bitcoin.",
    icon: Box,
  },
  {
    title: "Governance & Delegation",
    description:
      "Skabeloner, delegation scope og execution queue fra Rainum governance API gør styring transparent.",
    icon: Radar,
  },
  {
    title: "Developer Activation",
    description:
      "API key manager, webhook konfiguration og kontrakt verification pipeline direkte i wallet oplevelsen.",
    icon: Binary,
  },
];

export function CapabilitiesSection() {
  return (
    <section
      id="governance"
      className="mx-auto mt-24 grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="space-y-6 rounded-[36px] border border-white/10 bg-slate-950/70 p-8">
        <Badge tone="violet" soft>
          Enterprise ready
        </Badge>
        <h2 className="text-3xl font-semibold text-white">
          Alt Rainum teknologi. Et samlet investor board.
        </h2>
        <p className="text-sm text-white/60">
          Vi bygger oven på den samme kodebase som driver Rainum blockchain:
          mempool v2, QoS protocol, bridge security manager og zkProof system.
          Walleten er det menneskelige lag oven på alt dette.
        </p>
        <Button variant="secondary" className="w-full sm:w-auto" asChild>
          <Link href="/dashboard">
            Udforsk dashboardet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {capabilityItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-white/60">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
