import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  Shield,
  Radar,
  SquareGanttChart,
  Gauge,
  FileCode2,
} from "lucide-react";
import { appNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

const iconMap = {
  Dashboard: Gauge,
  Bridge: Layers,
  Staking: Shield,
  Governance: SquareGanttChart,
  "Security Center": Radar,
  Developer: FileCode2,
} as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col gap-6 bg-slate-950/80 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Rainum Wallet V2
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-white">
          Control Center
        </h1>
      </div>

      <nav className="flex flex-col gap-1 text-sm text-white/60">
        {appNav.map((item) => {
          const Icon = iconMap[item.title as keyof typeof iconMap] ?? Gauge;
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-4 py-3 font-medium transition",
                active
                  ? "bg-white/10 text-white shadow-neon"
                  : "hover:bg-white/5 hover:text-white",
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={1.7} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-white">Zero-Trust Mode</h3>
        <p className="text-xs text-white/60">
          Hardware attestations enabled. Sessions protected by WebAuthn and
          device binding.
        </p>
      </div>
    </div>
  );
}
