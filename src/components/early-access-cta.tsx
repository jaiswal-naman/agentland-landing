"use client";

import { motion } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function EarlyAccessCTA() {
  return (
    <section id="book-demo" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[200%] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We&apos;re onboarding our first 10 design partners this quarter.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed"
        >
          Get early access, shape the product, and be first to automate what
          your competitors are still doing manually.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ShimmerButton className="px-10 py-4 text-lg font-medium">
            Book a Demo &rarr;
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
