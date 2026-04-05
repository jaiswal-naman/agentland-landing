"use client";

import { motion } from "motion/react";
import { HeroBackground } from "@/components/hero-background";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const agents = [
  {
    name: "Invoice Processing Agent",
    color: "bg-emerald-500",
    progress: 87,
    barColor: "bg-emerald-500",
    metric: "+14h",
  },
  {
    name: "Customer Onboarding Agent",
    color: "bg-blue-500",
    progress: 64,
    barColor: "bg-blue-500",
    metric: "+8h",
  },
  {
    name: "Report Generation Agent",
    color: "bg-violet-500",
    progress: 72,
    barColor: "bg-violet-500",
    metric: "+6h",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 lg:py-32">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
            </span>
            The AI Adoption Platform
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06] text-slate-900"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your company is full of automation.
          <br />
          <span className="italic bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            You just can&apos;t see it yet.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          AgentLand connects to your systems, discovers every workflow worth
          automating, builds the agents, and deploys them — without an AI team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#early-access">
            <button
              className="px-8 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                boxShadow:
                  "0 4px 24px rgba(99,102,241,0.25), 0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              See What You&apos;re Missing &rarr;
            </button>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 text-base font-medium text-slate-500 border border-slate-200 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
          >
            How It Works &darr;
          </a>
        </motion.div>

        {/* Credibility */}
        <motion.p
          {...fadeUp(0.4)}
          className="mt-12 text-sm text-slate-400 font-medium tracking-wide"
        >
          YC Startup School &apos;26 &middot; Built at NIT Rourkela
        </motion.p>
      </div>

      {/* Floating Dashboard Preview */}
      <motion.div
        {...fadeUp(0.5)}
        className="relative z-10 mt-16 w-full max-w-3xl mx-auto px-6"
      >
        <div
          className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xl overflow-hidden transition-transform duration-500 hover:!transform-none"
          style={{
            transform: "perspective(1200px) rotateX(5deg)",
            boxShadow: "0 32px 80px rgba(10,15,30,0.12)",
          }}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <span className="text-sm font-semibold text-slate-800">
              AgentLand Dashboard
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              &#10022; 6 agents live
            </span>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5">
            <div className="rounded-xl bg-slate-50/80 p-4 text-center">
              <p className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                47
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Opportunities
              </p>
            </div>
            <div className="rounded-xl bg-slate-50/80 p-4 text-center">
              <p className="text-2xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                6
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Agents Live
              </p>
            </div>
            <div className="rounded-xl bg-slate-50/80 p-4 text-center">
              <p className="text-2xl font-bold bg-gradient-to-br from-sky-600 to-sky-400 bg-clip-text text-transparent">
                23h
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Saved / week
              </p>
            </div>
            <div className="rounded-xl bg-slate-50/80 p-4 text-center">
              <p className="text-2xl font-bold bg-gradient-to-br from-amber-600 to-amber-400 bg-clip-text text-transparent">
                98%
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Success
              </p>
            </div>
          </div>

          {/* Agent rows */}
          <div className="px-5 pb-5 space-y-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center gap-3 rounded-xl bg-slate-50/60 px-4 py-3"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${agent.color} shrink-0`}
                />
                <span className="text-sm font-medium text-slate-700 min-w-0 truncate flex-1">
                  {agent.name}
                </span>
                <div className="hidden sm:block w-28 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${agent.barColor}`}
                    style={{ width: `${agent.progress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-500 shrink-0">
                  {agent.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
