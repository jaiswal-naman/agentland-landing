"use client";

import { motion } from "motion/react";

export function Founder() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--indigo)] mb-4"
        >
          The Builder
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-normal mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built for the companies
          <br />
          <span className="gradient-heading">running blind.</span>
        </motion.h2>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative max-w-xl mx-auto"
        >
          {/* Glow pseudo-element */}
          <div
            className="absolute -inset-4 -z-10 rounded-3xl opacity-40 blur-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(79, 70, 229, 0.25), rgba(124, 58, 237, 0.15))",
            }}
          />

          {/* Card */}
          <div className="relative bg-white border border-[var(--border-subtle)] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-10 text-center">
            {/* Avatar */}
            <div
              className="w-[52px] h-[52px] rounded-full mx-auto mb-6 bg-gradient-to-br from-[var(--indigo)] to-[var(--violet)] flex items-center justify-center text-white text-xl font-normal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              N
            </div>

            {/* Large quote mark */}
            <div
              className="text-6xl leading-none font-normal gradient-heading opacity-30 select-none mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;
            </div>

            {/* Quote */}
            <blockquote
              className="text-[var(--navy)] italic leading-relaxed text-[18px] sm:text-[19px] max-w-md mx-auto"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The bottleneck was never the AI. It was the missing layer
              between &lsquo;we have agents&rsquo; and &lsquo;we can see
              what they&apos;re doing.&rsquo; That layer is AgentLand.
            </blockquote>

            {/* Gradient divider */}
            <div
              className="w-8 h-[2px] mx-auto my-6"
              style={{
                background: "linear-gradient(90deg, var(--indigo), var(--violet))",
              }}
            />

            {/* Name */}
            <p className="text-[var(--navy)] font-bold text-base">Naman Jaiswal</p>

            {/* Credentials */}
            <p className="text-[var(--text-tertiary)] text-sm mt-1">
              NIT Rourkela &middot; YC Startup School &apos;26
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
