import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { StatStrip } from "@/components/stat-strip";
import { HowItWorks } from "@/components/how-it-works";
import { TheShift } from "@/components/the-shift";
import { FreeAudit } from "@/components/free-audit";
import { FeatureBento } from "@/components/feature-bento";
import { Integrations } from "@/components/integrations";
import { Founder } from "@/components/founder";
import { EarlyAccessCTA } from "@/components/early-access-cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatStrip />
        <HowItWorks />
        <TheShift />
        <FreeAudit />
        <FeatureBento />
        <Integrations />
        <Founder />
        <EarlyAccessCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
