import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import type { RainumAlert } from "@/lib/api/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type AlertCenterProps = {
  alerts: RainumAlert[];
};

const toneMap: Record<RainumAlert["severity"], { tone: Parameters<typeof Badge>[0]["tone"]; icon: React.ReactNode }> =
  {
    info: { tone: "neutral", icon: <Info className="h-4 w-4" /> },
    warning: { tone: "amber", icon: <AlertTriangle className="h-4 w-4" /> },
    critical: { tone: "critical", icon: <AlertTriangle className="h-4 w-4" /> },
  };

export function AlertCenter({ alerts }: AlertCenterProps) {
  const activeAlerts = alerts.slice(0, 4);

  return (
    <Card padding="sm" className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Security Operations</h3>
          <p className="text-sm text-white/60">
            Prometheus alerts, bridge fraud signals og validator health.
          </p>
        </div>
        <Badge tone={activeAlerts.length ? "amber" : "aqua"}>
          {activeAlerts.length ? `${activeAlerts.length} aktive` : "Ingen alerts"}
        </Badge>
      </div>
      <div className="space-y-3">
        {activeAlerts.length === 0 ? (
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-white/60">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            Alle systemer kører nominelt. Seneste audit passeret.
          </div>
        ) : (
          activeAlerts.map((alert) => {
            const { tone, icon } = toneMap[alert.severity];
            return (
              <div
                key={alert.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{alert.title}</h4>
                    <p className="mt-1 text-xs text-white/50">{alert.message}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-xs text-white/40">
                  <Badge tone={tone}>{alert.severity}</Badge>
                  <span>
                    {new Date(alert.timestamp).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
}
