import { HeroSection } from "@/components/sections/hero";
import { MetricsSection } from "@/components/sections/metrics";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { SecuritySection } from "@/components/sections/security";
import { InvestorProofSection } from "@/components/sections/investor-proof";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-16">
      <HeroSection />
      <MetricsSection />
      <CapabilitiesSection />
      <SecuritySection />
      <InvestorProofSection />
    </div>
  );
}
