"use client";

import { motion } from "motion/react";

/* ─── Audit steps ────────────────────────────────────── */
const steps = [
  "Connect one system — 10 minutes",
  "AgentLand maps every automation",
  "Full report: ROI, time savings, ranked",
  "No commitment. No surprises.",
];

/* ─── Opportunity rows for the floating card ─────────── */
const opportunities = [
  {
    label: "Invoice follow-up automation",
    hours: "+14h/week",
    score: 88,
    detail: "ROI: 88/100 \u00B7 Low complexity",
    gradient: "linear-gradient(90deg, #4F46E5, #7C3AED)",
  },
  {
    label: "CRM data enrichment",
    hours: "+8h/week",
    score: 74,
    detail: "ROI: 74/100 \u00B7 Medium",
    gradient: "linear-gradient(90deg, #7C3AED, #8B5CF6)",
  },
  {
    label: "Support ticket routing",
    hours: "+6h/week",
    score: 61,
    detail: "ROI: 61/100 \u00B7 Low",
    gradient: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
  },
];

export function FreeAudit() {
  return (
    <section className="py-28 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ─── LEFT SIDE ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--indigo)" }}
            >
              The Free Audit
            </p>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See what you&apos;re
              <br />
              <span className="gradient-heading">
                leaving on the table.
              </span>
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-4 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center gap-3 cursor-default"
                >
                  {/* Arrow icon */}
                  <span
                    className="flex items-center justify-center shrink-0 rounded-full transition-all duration-200 group-hover:scale-110"
                    style={{
                      width: 26,
                      height: 26,
                      background:
                        "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[var(--text-mid)] leading-snug">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
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
                  Get Your Free Audit &rarr;
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT SIDE: Floating Audit Card ────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <div
                className="w-72 h-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 65%)",
                  filter: "blur(40px)",
                }}
              />
            </div>

            {/* Card */}
            <div
              className="relative z-10 w-full max-w-[400px] rounded-2xl border border-slate-200/80 bg-white overflow-hidden"
              style={{
                perspective: "800px",
                transform: "rotateY(-2deg) rotateX(2deg)",
                animation: "card-float 6s ease-in-out infinite",
                boxShadow: "0 24px 64px rgba(10,15,30,0.1)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <span className="text-sm font-semibold text-slate-800">
                  Your Audit Report
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  &#10022; 6 opportunities
                </span>
              </div>

              {/* Opportunity rows */}
              <div className="p-4 space-y-3">
                {opportunities.map((opp, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-100 p-3 transition-all duration-200 hover:border-indigo-200"
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateX(0)";
                    }}
                  >
                    {/* Label + hours */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-700">
                        {opp.label}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-600">
                        {opp.hours}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mb-1.5">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${opp.score}%`,
                          background: opp.gradient,
                        }}
                      />
                    </div>
                    {/* Detail */}
                    <p className="text-[10px] text-slate-400 font-medium">
                      {opp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
