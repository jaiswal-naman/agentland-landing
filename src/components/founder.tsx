"use client";

import { motion } from "motion/react";

export function Founder() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built by someone who&apos;s been in the trenches.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card max-w-xl mx-auto p-10 text-center"
        >
          <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--connect-color)] flex items-center justify-center text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            N
          </div>

          <h3
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Naman
          </h3>
          <p className="text-sm text-[var(--text-tertiary)] mt-1 mb-6">
            Founder, AgentLand
          </p>

          <blockquote className="text-[var(--text-secondary)] italic leading-relaxed text-lg">
            &ldquo;I watched companies spend millions hiring AI teams, buying tools,
            and running pilots that went nowhere. The problem was never the AI —
            it was that nobody built the full adoption layer. So I&apos;m building
            it.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[var(--text-tertiary)]">
            <span>NIT Rourkela</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
            <span>YC Startup School &apos;26</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
