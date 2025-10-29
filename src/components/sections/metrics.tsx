import { Gauge, LockKeyhole, Network, ShieldHalf } from "lucide-react";

const metrics = [
  {
    title: "Dual-VM Atomicity",
    value: "Move ↔ EVM",
    description:
      "Kør cross-VM transaktioner med JIT compiler og Merkle bekræftelser fra Rainum VM Bridge.",
    icon: ShieldHalf,
  },
  {
    title: "Performance",
    value: "85,324 TPS",
    description:
      "Block-STM parallel executor + QoS mempool v2 giver konsekvent Tier-1 throughput.",
    icon: Gauge,
  },
  {
    title: "Bridge Assurance",
    value: "BLS · Timelock",
    description:
      "Bridge Security Manager leverer multi-sig attestationer, fraud proofs og time-locked withdrawals.",
    icon: LockKeyhole,
  },
  {
    title: "Observability",
    value: "Prometheus · SIEM",
    description:
      "Advanced monitoring eksponerer realtime metrics, alerts og webhook orkestrering for compliance.",
    icon: Network,
  },
];

export function MetricsSection() {
  return (
    <section
      id="platform"
      className="relative mx-auto mt-24 w-full max-w-6xl rounded-[40px] border border-white/10 bg-slate-950/70 p-10 backdrop-blur-3xl"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-white"
            >
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/50">
                <Icon className="h-4 w-4 text-white/60" />
                {metric.title}
              </div>
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="text-sm text-white/60">{metric.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
