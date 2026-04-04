"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function PhaseConnect() {
  return (
    <div className="relative h-[300px] w-[300px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-2xl font-bold text-[var(--connect-color)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &#9670;
        </span>
      </div>
      <OrbitingCircles radius={80} duration={20} delay={0}>
        <span className="text-xl" title="Salesforce">&#9729;&#65039;</span>
      </OrbitingCircles>
      <OrbitingCircles radius={80} duration={20} delay={3.3}>
        <span className="text-xl" title="Slack">&#128172;</span>
      </OrbitingCircles>
      <OrbitingCircles radius={80} duration={20} delay={6.6}>
        <span className="text-xl" title="HubSpot">&#128200;</span>
      </OrbitingCircles>
      <OrbitingCircles radius={130} duration={30} delay={0} reverse>
        <span className="text-xl" title="Jira">&#128203;</span>
      </OrbitingCircles>
      <OrbitingCircles radius={130} duration={30} delay={5} reverse>
        <span className="text-xl" title="Gmail">&#9993;&#65039;</span>
      </OrbitingCircles>
      <OrbitingCircles radius={130} duration={30} delay={10} reverse>
        <span className="text-xl" title="Notion">&#128221;</span>
      </OrbitingCircles>
    </div>
  );
}
