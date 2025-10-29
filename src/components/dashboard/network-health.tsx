import { Cpu, Gauge, SignalHigh } from "lucide-react";
import type { RainumMetrics } from "@/lib/api/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NetworkHealthProps = {
  metrics: RainumMetrics;
};

export function NetworkHealth({ metrics }: NetworkHealthProps) {
  const { network } = metrics;
  return (
    <Card padding="sm" className="grid gap-4 md:grid-cols-3">
      <MetricBlock
        title="Gennemsnitlig TPS"
        value={network.tps.toLocaleString()}
        description="Parallel Block-STM udførsel"
        icon={<Gauge className="h-5 w-5" />}
        badge="EVM + Move"
      />
      <MetricBlock
        title="Finalitet"
        value={`${(network.finalityMs / 1000).toFixed(2)} s`}
        description={network.consensus}
        icon={<Cpu className="h-5 w-5" />}
        badge="Narwhal pipeline"
      />
      <MetricBlock
        title="Peers aktiv"
        value={network.peers.toString()}
        description={`QoS Express: ${network.qosExpress} / Standard: ${network.qosStandard}`}
        icon={<SignalHigh className="h-5 w-5" />}
        badge="Stake-weighted"
      />
    </Card>
  );
}

type MetricBlockProps = {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
};

function MetricBlock({ title, value, description, icon, badge }: MetricBlockProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
      <div className="flex items-center justify-between">
        <Badge tone="aqua" soft>
          {badge}
        </Badge>
        <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70">
          {icon}
        </div>
      </div>
      <h4 className="mt-6 text-sm text-white/60">{title}</h4>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs text-white/50">{description}</p>
    </div>
  );
}
