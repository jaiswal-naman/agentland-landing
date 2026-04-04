"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export function PhaseDiscover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const src1 = useRef<HTMLDivElement>(null);
  const src2 = useRef<HTMLDivElement>(null);
  const src3 = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);
  const output = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative h-[280px] w-full max-w-[420px] mx-auto flex items-center justify-between px-4"
    >
      <div className="flex flex-col gap-8">
        <div ref={src1} className="glass-card px-3 py-2 text-xs text-[var(--text-secondary)]">
          CRM Data
        </div>
        <div ref={src2} className="glass-card px-3 py-2 text-xs text-[var(--text-secondary)]">
          Support Tickets
        </div>
        <div ref={src3} className="glass-card px-3 py-2 text-xs text-[var(--text-secondary)]">
          API Logs
        </div>
      </div>

      <div
        ref={center}
        className="glass-card px-4 py-3 text-sm font-medium text-[var(--discover-color)]"
      >
        AI Analysis
      </div>

      <div ref={output} className="glass-card px-3 py-2 text-xs text-[var(--automate-color)]">
        47 Opportunities
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={src1} toRef={center} />
      <AnimatedBeam containerRef={containerRef} fromRef={src2} toRef={center} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={src3} toRef={center} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={center} toRef={output} delay={1.5} />
    </div>
  );
}
