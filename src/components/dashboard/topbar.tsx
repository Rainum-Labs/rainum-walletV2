import { Bell, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DashboardTopbarProps = {
  address: string;
  alerts?: number;
  className?: string;
};

export function DashboardTopbar({
  address,
  alerts = 0,
  className,
}: DashboardTopbarProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.32em] text-white/40">
            Wallet address
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-white">{address}</h2>
            <Badge tone="aqua" className="text-xs">
              Verified
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 md:flex">
            <Search className="h-4 w-4" />
            Søg alt…
          </div>
          <Button variant="ghost" className="relative h-11 w-11 rounded-full">
            <Bell className="h-5 w-5" />
            {alerts > 0 && (
              <span className="absolute right-3 top-3 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
            )}
          </Button>
          <Button variant="gradient" className="hidden md:inline-flex" glow>
            <ShieldCheck className="mr-2 h-4 w-4" />
            Security Review
          </Button>
        </div>
      </div>
    </div>
  );
}
