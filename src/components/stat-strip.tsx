"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

export function StatStrip() {
  return (
    <section
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Top gradient border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--indigo), var(--violet), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-0"
        >
          {/* Left stat — 79% */}
          <div className="text-center md:text-left md:pr-16">
            <div className="flex items-baseline justify-center md:justify-start">
              <NumberTicker
                value={79}
                className="text-[100px] sm:text-[120px] lg:text-[140px] font-[800] leading-none tracking-tight text-[var(--navy)]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              />
              <span
                className="text-[48px] sm:text-[56px] lg:text-[64px] leading-none ml-1 gradient-heading italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                %
              </span>
            </div>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-[280px] mx-auto md:mx-0 leading-relaxed">
              of companies are adopting AI agents right now
            </p>
          </div>

          {/* Center divider */}
          <div className="hidden md:flex flex-col items-center self-stretch py-4">
            <div className="flex-1 w-px bg-[var(--border-subtle)]" />
            <div
              className="w-3 h-3 rounded-full my-4 shrink-0"
              style={{
                backgroundColor: "var(--indigo)",
                boxShadow:
                  "0 0 12px rgba(79, 70, 229, 0.5), 0 0 24px rgba(79, 70, 229, 0.25)",
              }}
            />
            <div className="flex-1 w-px bg-[var(--border-subtle)]" />
          </div>

          {/* Mobile divider */}
          <div className="md:hidden flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-[var(--border-subtle)]" />
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{
                backgroundColor: "var(--indigo)",
                boxShadow:
                  "0 0 12px rgba(79, 70, 229, 0.5), 0 0 24px rgba(79, 70, 229, 0.25)",
              }}
            />
            <div className="flex-1 h-px bg-[var(--border-subtle)]" />
          </div>

          {/* Right stat — 11% */}
          <div className="text-center md:text-right md:pl-16">
            <div className="flex items-baseline justify-center md:justify-end">
              <NumberTicker
                value={11}
                className="text-[100px] sm:text-[120px] lg:text-[140px] font-[800] leading-none tracking-tight gradient-heading"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              />
              <span
                className="text-[48px] sm:text-[56px] lg:text-[64px] leading-none ml-1 gradient-heading italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                %
              </span>
            </div>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-[280px] mx-auto md:mx-0 md:ml-auto leading-relaxed">
              have reached full production deployment
            </p>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p
            className="text-[22px] sm:text-[26px] lg:text-[28px] leading-snug italic text-[var(--navy)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            That gap is where companies lose.
            <br />
            <span className="gradient-heading">
              It&apos;s where AgentLand lives.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
