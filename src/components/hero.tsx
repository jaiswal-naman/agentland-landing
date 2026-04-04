"use client";

import { motion } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HeroBackground } from "@/components/hero-background";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-[88px] font-bold leading-[1] tracking-tight gradient-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI automation that actually ships.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
        >
          80% of AI projects fail. AgentLand connects your systems, discovers
          what to automate, builds the agents, and deploys them — no AI team
          required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#book-demo">
            <ShimmerButton className="px-8 py-3 text-base font-medium">
              Book a Demo &rarr;
            </ShimmerButton>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3 text-base font-medium text-[var(--text-secondary)] border border-white/10 rounded-lg hover:border-white/20 hover:text-[var(--text-primary)] transition-all"
          >
            See How It Works &darr;
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-sm text-[var(--text-tertiary)] font-medium"
        >
          YC Startup School &apos;26 &middot; Built at NIT Rourkela
        </motion.p>
      </div>
    </section>
  );
}
