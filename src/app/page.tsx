import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { TheShift } from "@/components/the-shift";
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
        <HowItWorks />
        <TheShift />
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
