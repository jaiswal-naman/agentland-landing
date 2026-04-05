"use client";

import { motion } from "motion/react";
import { PhaseConnect } from "./phase-connect";
import { PhaseDiscover } from "./phase-discover";
import { PhaseAutomate } from "./phase-automate";
import { PhaseMonitor } from "./phase-monitor";

const phases = [
  {
    key: "connect",
    number: "01",
    label: "Connect",
    color: "#0EA5E9",
    bgGradient: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
    title: "Route through one proxy",
    description:
      "Point your agents at AgentLand. Works with OpenAI, Anthropic, Bedrock, Azure, and any compatible endpoint.",
    Visual: PhaseConnect,
  },
  {
    key: "discover",
    number: "02",
    label: "Detect",
    color: "#7C3AED",
    bgGradient: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    title: "Agents appear instantly",
    description:
      "Every agent shows up in your dashboard the moment it routes through the proxy. Zero configuration.",
    Visual: PhaseDiscover,
  },
  {
    key: "deploy",
    number: "03",
    label: "Monitor",
    color: "#059669",
    bgGradient: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    title: "Track cost, PII, and failures",
    description:
      "Per-agent, per-model, per-day cost breakdown. PII detection with 25+ patterns. Catch runaway loops before they burn budget.",
    Visual: PhaseAutomate,
  },
  {
    key: "monitor",
    number: "04",
    label: "Govern",
    color: "#D97706",
    bgGradient: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
    title: "Control and comply",
    description:
      "Kill switch per agent. Role-based access. Compliance reporting — EU AI Act, SOC 2 evidence packages. Full audit trail.",
    Visual: PhaseMonitor,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--indigo)] mb-4"
          >
            How It Works
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four steps.{" "}
            <span className="gradient-heading">Full visibility.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            From first proxy connection to full observability. Under five
            minutes.
          </motion.p>
        </div>

        {/* Phase cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: 0.15 * i,
                ease: "easeOut",
              }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Visual area */}
              <div
                className="h-[160px] relative flex items-center justify-center overflow-hidden"
                style={{ background: phase.bgGradient }}
              >
                <div className="scale-[0.55] pointer-events-none">
                  <phase.Visual />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6">
                {/* Phase number + label */}
                <p className="text-xs font-semibold tracking-wide mb-2">
                  <span className="text-[var(--text-tertiary)]">
                    {phase.number}
                  </span>
                  <span className="text-[var(--text-tertiary)]"> · </span>
                  <span style={{ color: phase.color }}>{phase.label}</span>
                </p>

                {/* Title */}
                <h3
                  className="text-base font-bold text-[var(--navy)] mb-2 leading-snug"
                >
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
