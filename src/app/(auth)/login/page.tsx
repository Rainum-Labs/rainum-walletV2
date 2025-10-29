import Link from "next/link";
import { ShieldCheck, KeyRound, Fingerprint, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const safeguards = [
  {
    title: "Zero-knowledge login",
    description: "Mnemonics krypteres lokalt med AES-256-GCM og PBKDF2 (4096 iterationer).",
    icon: ShieldCheck,
  },
  {
    title: "WebAuthn & Passkeys",
    description: "Aktivér hardware-sikring for admin-roller via device binding.",
    icon: Fingerprint,
  },
  {
    title: "Session hardening",
    description: "Rotérbare JWTs, HttpOnly cookies og adaptive MFA på nye enheder.",
    icon: Lock,
  },
  {
    title: "Hardware wallets",
    description: "Ledger/Trezor support via WebHID/WebUSB til signering uden nøgle-eksponering.",
    icon: KeyRound,
  },
];

export default function LoginPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <Badge tone="aqua" soft className="text-sm">
          Rainum Enterprise Access
        </Badge>
        <h1 className="text-3xl font-semibold text-white">
          Log ind og lås op for Rainums fulde økosystem
        </h1>
        <p className="text-sm text-white/60">
          Brug din sikkerheds-hærdede passphrase eller tilslut en hardware wallet. Vi kører
          aldrig private nøgler igennem backend – alt forbliver krypteret lokalt.
        </p>

        <form className="mt-10 space-y-5 text-sm text-white/70">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs uppercase tracking-[0.25em] text-white/40">
              Email eller Rainum ID
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="investor@rainum.io"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-aqua-400 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="passphrase" className="block text-xs uppercase tracking-[0.25em] text-white/40">
              Rainum passphrase
            </label>
            <input
              id="passphrase"
              name="passphrase"
              type="password"
              placeholder="•••• •••• •••• ••••"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-violet-400 focus:outline-none"
              required
            />
            <p className="text-xs text-white/40">
              12-24 ord. Krypteres med WebCrypto og deles aldrig med Rainum.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-2 text-xs text-white/60">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10" />
              Husk denne enhed (WebAuthn binding)
            </label>
            <Link href="#" className="text-xs text-aqua-200 hover:text-aqua-100">
              Gendan konto
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button type="submit" variant="gradient" glow className="w-full sm:w-auto">
              Log ind
            </Button>
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Forbind hardware wallet
            </Button>
          </div>
        </form>
      </div>

      <Card className="space-y-5 border-white/10 bg-white/5 text-sm text-white/70">
        <h2 className="text-lg font-semibold text-white">Sikkerhedslag</h2>
        <p className="text-xs text-white/50">
          Walleten er bygget oven på Rainums enterprise security stack – med audit logs,
          rate limiting og zero-trust governance. Nye enheder kræver API-key signatur og
          VRF-bekræftelse.
        </p>
        <ul className="space-y-4">
          {safeguards.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <span className="mt-1 rounded-xl border border-white/10 bg-white/10 p-2 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-xs text-white/50">
          Login endpoint beskyttet med actix rate limiting, JWT rotationsnøgler og promethues audit events.
        </div>
      </Card>
    </div>
  );
}
