"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs rounded-full px-3 py-1 font-medium"
      style={{
        background: "rgba(79,70,229,.2)",
        color: "#A5B4FC",
        boxShadow: "0 0 12px rgba(79,70,229,.15)",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Card 1 Visual: Flow Diagram ─── */
function FindVisual() {
  const nodes = [
    { label: "Slack", bg: "rgba(255,255,255,.07)", color: "#94A3B8" },
    { label: "HubSpot", bg: "rgba(255,255,255,.07)", color: "#94A3B8" },
    { label: "AI Analysis", bg: "rgba(79,70,229,.35)", color: "#C4B5FD" },
    { label: "47 opportunities", bg: "rgba(79,70,229,.25)", color: "#A5B4FC" },
  ];

  return (
    <div className="relative w-full px-3 py-6 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap"
              style={{ background: node.bg, color: node.color }}
            >
              {node.label}
            </span>
            {i < nodes.length - 1 && (
              <span className="text-xs" style={{ color: "#4B5563" }}>
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Scan line */}
      <div
        className="relative w-full h-0.5 mt-3 overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,.05)" }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #818CF8, transparent)",
          }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

/* ─── Card 2 Visual: Code Block ─── */
function GenerateVisual() {
  return (
    <div className="w-full px-3 py-4">
      <div
        className="rounded-lg p-4 text-xs font-mono leading-relaxed overflow-x-auto"
        style={{ background: "rgba(0,0,0,.35)" }}
      >
        <div>
          <span style={{ color: "#4B5563" }}>{"// Cost breakdown — last 7d"}</span>
        </div>
        <div>
          <span style={{ color: "#818CF8" }}>agent</span>
          <span style={{ color: "#E2E8F0" }}>:</span>{" "}
          <span style={{ color: "#86EFAC" }}>
            &apos;invoice-processor&apos;
          </span>
        </div>
        <div>
          <span style={{ color: "#818CF8" }}>model</span>
          <span style={{ color: "#E2E8F0" }}>:</span>{" "}
          <span style={{ color: "#86EFAC" }}>
            &apos;gpt-4o&apos;
          </span>
        </div>
        <div>
          <span style={{ color: "#818CF8" }}>calls</span>
          <span style={{ color: "#E2E8F0" }}>:</span>{" "}
          <span style={{ color: "#A5B4FC" }}>1,247</span>
        </div>
        <div>
          <span style={{ color: "#818CF8" }}>cost</span>
          <span style={{ color: "#E2E8F0" }}>:</span>{" "}
          <span style={{ color: "#86EFAC" }}>$18.40</span>
        </div>
        <div>
          <span style={{ color: "#818CF8" }}>pii_flags</span>
          <span style={{ color: "#E2E8F0" }}>:</span>{" "}
          <span style={{ color: "#FCA5A5" }}>0</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Card 3 Visual: Deploy Status ─── */
function DeployVisual() {
  return (
    <div className="w-full px-3 py-6 flex flex-col items-center gap-3">
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
        style={{ background: "rgba(34,197,94,.12)", color: "#86EFAC" }}
      >
        <motion.span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: "#22C55E" }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        Agent deployed&nbsp;&middot;&nbsp;Sandbox active
      </div>
      <div className="flex items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-medium"
          style={{ background: "rgba(255,255,255,.06)", color: "#94A3B8" }}
        >
          Rollback ready
        </span>
        <span
          className="rounded-full px-3 py-1 text-[10px] font-medium"
          style={{ background: "rgba(255,255,255,.06)", color: "#94A3B8" }}
        >
          Human approved
        </span>
      </div>
    </div>
  );
}

/* ─── Card 4 Visual: Metrics ─── */
function MetricsVisual() {
  const barHeights = [40, 65, 50, 80, 55, 72];

  return (
    <div className="w-full px-3 py-5 flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: "#A5B4FC" }}>
            98%
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "#64748B" }}>
            uptime
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: "#6EE7B7" }}>
            23h
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "#64748B" }}>
            saved/wk
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: "#FCD34D" }}>
            $1.2k
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "#64748B" }}>
            saved/mo
          </div>
        </div>
      </div>
      <div className="flex items-end gap-1.5 h-10">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            className="w-4 rounded-sm"
            style={{ background: "#818CF8", height: `${h}%` }}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Glass Card Wrapper ─── */
function GlassCard({
  index,
  visual,
  title,
  description,
  pill,
}: {
  index: number;
  visual: React.ReactNode;
  title: string;
  description: string;
  pill: string;
}) {
  return (
    <motion.div
      className="glass-dark rounded-2xl overflow-hidden flex flex-col"
      custom={index}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Visual area */}
      <div
        className="min-h-[160px] flex items-center justify-center border-b"
        style={{ borderColor: "rgba(255,255,255,.05)" }}
      >
        {visual}
      </div>

      {/* Text area */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-white text-base font-semibold leading-snug">
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
          {description}
        </p>
        <div className="mt-auto pt-2">
          <PillTag>{pill}</PillTag>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
const cards = [
  {
    visual: <FindVisual />,
    title: "See every agent",
    description:
      "Agents appear in your dashboard the moment they route through the proxy. Zero config, zero SDK changes.",
    pill: "Auto-discovery",
  },
  {
    visual: <GenerateVisual />,
    title: "Track every dollar",
    description: "Per-agent, per-model, per-day cost breakdown. Catch runaway loops before they burn budget.",
    pill: "Cost intelligence",
  },
  {
    visual: <DeployVisual />,
    title: "Flag sensitive data",
    description: "Detects SSN, credit cards, emails, phone numbers, addresses. 25+ pattern tests out of the box.",
    pill: "PII detection",
  },
  {
    visual: <MetricsVisual />,
    title: "Govern and comply",
    description: "Kill switch per agent. RBAC. EU AI Act readiness. SOC 2 evidence packages.",
    pill: "Compliance-ready",
  },
];

export function TheShift() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "var(--navy, #0A0F1E)" }}
    >
      {/* ── Gradient blobs ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "rgba(79,70,229,.18)",
          filter: "blur(100px)",
          top: "-5%",
          right: "-8%",
          animation: "blob-float 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 350,
          height: 350,
          background: "rgba(124,58,237,.1)",
          filter: "blur(100px)",
          bottom: "5%",
          left: "-5%",
          animation: "blob-float 24s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 250,
          height: 250,
          background: "rgba(14,165,233,.06)",
          filter: "blur(100px)",
          top: "40%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          animation: "blob-float 22s ease-in-out infinite",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: "#818CF8" }}
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The Control Plane
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-6"
          style={{ color: "#FFFFFF" }}
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Every company runs agents.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #A5B4FC, #C4B5FD)",
            }}
          >
            Few can see them.
          </span>
        </motion.h2>

        {/* Lead text */}
        <motion.p
          className="max-w-2xl text-base md:text-lg leading-relaxed mb-14"
          style={{ color: "#94A3B8" }}
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          AgentLand gives you one control plane for every AI agent &mdash;
          cost tracking, PII detection, compliance, and real-time monitoring
          in one dashboard.
        </motion.p>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <GlassCard
              key={card.title}
              index={i}
              visual={card.visual}
              title={card.title}
              description={card.description}
              pill={card.pill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
