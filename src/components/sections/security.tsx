import { Check, Fingerprint, KeyRound, Lock, Shield } from "lucide-react";

const controls = [
  {
    title: "Zero-Trust Access",
    description:
      "WebAuthn passkeys, device binding og adaptive MFA for alle enterprise roller.",
    icon: Fingerprint,
  },
  {
    title: "Client-side Key Vault",
    description:
      "AES-256-GCM kryptering med Scrypt n=16384, r=8, p=1 og Secure Enclave support.",
    icon: KeyRound,
  },
  {
    title: "Continuous Monitoring",
    description:
      "Prometheus alerting, webhook automation og Rainum SIEM integration for revision.",
    icon: Shield,
  },
  {
    title: "Transaction Simulation",
    description:
      "Fork sandbox kører fuld state simulation før broadcast og fremhæver fee & privacy konsekvenser.",
    icon: Lock,
  },
];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="mx-auto mt-24 w-full max-w-6xl rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-900/60 p-10"
    >
      <div className="space-y-6 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Security & Compliance</h2>
            <p className="mt-2 text-sm text-white/60">
              Designet ud fra Rainums enterprise sikkerhedsprofil med ZKP
              privacy, bridge guardrails og audit logs klar til SOC2/GDPR.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-200">
            <Check className="h-4 w-4" />
            Pen-test klar · Bug bounty på vej
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {controls.map((control) => {
            const Icon = control.icon;
            return (
              <div
                key={control.title}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70"
              >
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {control.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/60">
                    {control.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
