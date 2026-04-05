"use client";

import { motion } from "motion/react";

/* ─── Discovery result rows ──────────────────────────── */
const discoveries = [
  { label: "Email campaign responses", color: "#7C3AED", score: 92 },
  { label: "Order status updates", color: "#059669", score: 78 },
  { label: "Meeting note summaries", color: "#0EA5E9", score: 65 },
];

/* ─── Dashboard metrics ──────────────────────────────── */
const metrics = [
  { value: "6", label: "Agents Live", color: "#4F46E5" },
  { value: "98%", label: "Success", color: "#059669" },
  { value: "23h", label: "Saved", color: "#0EA5E9" },
  { value: "$840", label: "Cost", color: "#D97706" },
];

const barHeights = [65, 80, 45, 90, 55, 75, 35, 85];

export function FeatureBento() {
  return (
    <section
      className="py-28 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: "var(--indigo)" }}
        >
          Platform
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-center mb-14 leading-[1.1]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Everything needed to
          <br />
          <span className="gradient-heading">run AI at scale.</span>
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ─── Card 1: Discovery Engine (2-col) ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="md:col-span-2 card-gradient-border"
            style={{ background: "#FFFFFF" }}
          >
            {/* Visual area */}
            <div
              className="relative h-[180px] overflow-hidden rounded-t-[16px]"
              style={{
                background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
              }}
            >
              {/* Scan line */}
              <div
                className="absolute top-0 left-0 w-1/3 h-full opacity-30 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(79,70,229,0.25), transparent)",
                  animation: "scan-move 3s ease-in-out infinite",
                }}
              />

              {/* Discovery rows */}
              <div className="relative z-10 flex flex-col gap-2.5 p-4 h-full justify-center">
                {discoveries.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center gap-2 rounded-lg p-2 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    {/* Icon dot */}
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: d.color }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                    <span className="text-xs font-medium text-slate-700 flex-1 truncate">
                      {d.label}
                    </span>
                    {/* Progress bar */}
                    <div className="w-20 h-1.5 rounded-full bg-slate-200/80 overflow-hidden shrink-0">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${d.score}%`,
                          background: d.color,
                        }}
                      />
                    </div>
                    <span
                      className="text-[11px] font-bold shrink-0 tabular-nums"
                      style={{ color: d.color }}
                    >
                      {d.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="p-6">
              <h3
                className="text-lg font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Discovery Engine
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Reads your business — schemas, logs, communication patterns.
                Surfaces every automation worth building, ranked by impact.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 2: One-Click Deploy (1-col) ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-gradient-border"
            style={{ background: "#FFFFFF" }}
          >
            <div
              className="relative h-[180px] overflow-hidden rounded-t-[16px] flex flex-col items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
              }}
            >
              {/* Deploy button */}
              <button
                className="px-6 py-3 text-sm font-semibold text-white rounded-lg cursor-default"
                style={{
                  background: "var(--navy)",
                  boxShadow: "0 4px 16px rgba(10,15,30,0.2)",
                }}
              >
                &#9655; Deploy Agent
              </button>
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
                    style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-700">
                  Live in production
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-lg font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                One-Click Deploy
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Review the plan. Approve it. It&apos;s live. No DevOps. No
                infrastructure.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 3: Enterprise Security (1-col) ───── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-gradient-border"
            style={{ background: "#FFFFFF" }}
          >
            <div
              className="relative h-[180px] overflow-hidden rounded-t-[16px] flex flex-col items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #FEF2F2, #FEE2E2)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden
              >
                <div
                  className="w-28 h-28 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
              </div>
              {/* Shield */}
              <div className="relative z-10 flex items-center justify-center">
                <div
                  className="w-16 h-[72px] flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 15%, 100% 65%, 50% 100%, 0% 65%, 0% 15%)",
                    background:
                      "linear-gradient(135deg, #EF4444, #DC2626)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              {/* Badges */}
              <div className="relative z-10 flex items-center gap-1.5 flex-wrap justify-center px-4">
                {["E2E Encrypted", "SOC 2", "GDPR"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      color: "#991B1B",
                      border: "1px solid rgba(239,68,68,0.2)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-lg font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enterprise Security
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                End-to-end encryption. PII anonymization. Sandboxed execution.
                Full audit trail.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 4: Human in the Loop (1-col) ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-gradient-border"
            style={{ background: "#FFFFFF" }}
          >
            <div
              className="relative h-[180px] overflow-hidden rounded-t-[16px] flex flex-col items-center justify-center gap-2 px-4"
              style={{
                background: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
              }}
            >
              {/* Dialog card */}
              <div
                className="w-full max-w-[220px] rounded-lg border border-slate-200 bg-white p-3"
                style={{ boxShadow: "0 4px 12px rgba(10,15,30,0.08)" }}
              >
                <p className="text-[11px] text-slate-700 font-medium mb-2.5 leading-snug">
                  Agent wants to send 43 emails. Approve?
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-center py-1 rounded text-[11px] font-semibold text-white bg-emerald-500 cursor-default">
                    &#10003; Approve
                  </span>
                  <span className="flex-1 text-center py-1 rounded text-[11px] font-semibold text-slate-500 bg-slate-100 cursor-default">
                    &#10007; Deny
                  </span>
                </div>
              </div>
              {/* Confidence meter */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-medium text-slate-500">
                  Threshold: 85%
                </span>
                <div className="w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "85%",
                      background:
                        "linear-gradient(90deg, #0EA5E9, #4F46E5)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-lg font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Human in the Loop
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Set confidence thresholds. Agents pause on high-stakes
                decisions.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 5: Live Dashboard (2-col) ────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 card-gradient-border"
            style={{ background: "#FFFFFF" }}
          >
            <div
              className="relative h-[180px] overflow-hidden rounded-t-[16px] p-4 flex flex-col justify-between"
              style={{
                background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
              }}
            >
              {/* Metric boxes */}
              <div className="grid grid-cols-4 gap-2">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg p-2 text-center"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    <p
                      className="text-lg font-bold"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </p>
                    <p className="text-[10px] font-medium text-slate-500">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-1.5 h-[60px] mt-2">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(180deg, #4F46E5 0%, #7C3AED 100%)`,
                      opacity: 0.7 + i * 0.035,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-lg font-bold text-[var(--text-primary)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Live Dashboard
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Every agent. Every execution. Success rates, time saved,
                inference costs — one view, real time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
