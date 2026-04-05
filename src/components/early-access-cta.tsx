"use client";

import { motion } from "motion/react";

export function EarlyAccessCTA() {
  return (
    <section
      id="book-demo"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Animated gradient blobs */}
      <div
        className="absolute top-[-30%] left-[-15%] w-[60%] h-[140%] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 60%)",
          animation: "blob-float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-40%] right-[-10%] w-[50%] h-[140%] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 60%)",
          animation: "blob-float 16s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-normal text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your business.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #A5B4FC, #C4B5FD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Automated.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "#64748B" }}
        >
          We&apos;re working with our first design partners this quarter. Spots
          are limited.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-block bg-white font-bold rounded-lg px-10 py-4 text-lg hover:-translate-y-1 transition-all duration-300"
            style={{
              color: "var(--navy)",
              boxShadow:
                "0 4px 24px rgba(79, 70, 229, 0.25), 0 0 48px rgba(79, 70, 229, 0.1)",
            }}
          >
            Get Your Free Audit &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
