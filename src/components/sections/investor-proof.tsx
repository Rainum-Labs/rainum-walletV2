import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function InvestorProofSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-5xl rounded-[36px] border border-white/10 bg-slate-950/80 p-10 text-center">
      <Badge tone="aqua" soft className="mx-auto">
        Klar til due diligence
      </Badge>
      <h2 className="mt-6 text-3xl font-semibold text-white">
        Klar til at invitere investorer og partnere indenfor
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60">
        Rainum Wallet V2 afspejler alle avancerede moduler i kæden – fra libp2p
        netværkslag til zkProof systemet. Hver sektion er understøttet af
        real-time data, audit logs og automatiserede rapporter.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="gradient" glow className="w-full sm:w-auto" asChild>
          <Link href="/investor-kit">Download investor kit</Link>
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto" asChild>
          <Link href="mailto:invest@rainum.io">Book live demo</Link>
        </Button>
      </div>
    </section>
  );
}
