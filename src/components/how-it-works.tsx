"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhaseConnect } from "./phase-connect";
import { PhaseDiscover } from "./phase-discover";
import { PhaseAutomate } from "./phase-automate";
import { PhaseMonitor } from "./phase-monitor";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    key: "connect",
    label: "Connect",
    color: "var(--connect-color)",
    headline: "Connect your systems.",
    copy: "Plug in your CRM, ERP, support desk, databases. 10 minutes, not months.",
    Visual: PhaseConnect,
  },
  {
    key: "discover",
    label: "Discover",
    color: "var(--discover-color)",
    headline: "AI finds what to automate.",
    copy: "LLMs scan your data flows, map every process, and rank them by ROI — so you automate the right things first.",
    Visual: PhaseDiscover,
  },
  {
    key: "automate",
    label: "Automate",
    color: "var(--automate-color)",
    headline: "Agents built and deployed for you.",
    copy: "Template-based agents configured, validated, sandboxed, and deployed. Days, not quarters.",
    Visual: PhaseAutomate,
  },
  {
    key: "monitor",
    label: "Monitor",
    color: "var(--monitor-color)",
    headline: "Everything monitored. Continuously.",
    copy: "Real-time dashboards, cost tracking, error alerts, ROI proof. Set it and trust it.",
    Visual: PhaseMonitor,
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      pin: true,
      start: "top top",
      end: "+=400%",
      scrub: 1,
      onUpdate: (self) => {
        const phase = Math.min(
          Math.floor(self.progress * phases.length),
          phases.length - 1
        );
        setActivePhase(phase);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isMobile]);

  const current = phases[activePhase];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] py-20 md:py-0"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Four steps. One platform.
          <br />
          <span className="text-[var(--text-secondary)]">
            Zero AI expertise needed.
          </span>
        </h2>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-16 flex-wrap">
          {phases.map((phase, i) => (
            <div key={phase.key} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    i <= activePhase ? phase.color : "var(--border-subtle)",
                  boxShadow:
                    i === activePhase ? `0 0 12px ${phase.color}` : "none",
                }}
              />
              <span
                className="ml-2 text-xs sm:text-sm font-medium transition-colors duration-500"
                style={{
                  color:
                    i === activePhase ? phase.color : "var(--text-tertiary)",
                }}
              >
                {phase.label}
              </span>
              {i < phases.length - 1 && (
                <div
                  className="w-8 sm:w-20 h-px mx-2 sm:mx-3 transition-colors duration-500"
                  style={{
                    backgroundColor:
                      i < activePhase ? phase.color : "var(--border-subtle)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: pinned content */}
        {!isMobile && (
          <div className="relative min-h-[500px] flex flex-col items-center justify-center">
            <h3
              className="text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-500"
              style={{ color: current.color, fontFamily: "var(--font-display)" }}
            >
              {current.headline}
            </h3>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12">
              {current.copy}
            </p>
            <div className="w-full">
              <current.Visual />
            </div>
          </div>
        )}

        {/* Mobile: stacked */}
        {isMobile && (
          <div className="space-y-24">
            {phases.map((phase) => (
              <div key={phase.key} className="text-center">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{
                    color: phase.color,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {phase.headline}
                </h3>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                  {phase.copy}
                </p>
                <phase.Visual />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
