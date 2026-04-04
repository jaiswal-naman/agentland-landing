"use client";

import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import { Rocket, Shield, UserCheck, BarChart3, Search } from "lucide-react";

const cards = [
  {
    title: "Autonomous Discovery Engine",
    description:
      "AI scans your connected systems and ranks every automation opportunity by ROI.",
    icon: Search,
    className: "md:col-span-2 md:row-span-2",
    iconColor: "var(--discover-color)",
  },
  {
    title: "One-Click Deploy",
    description:
      "Approve an agent. It\u2019s live in minutes. Sandboxed, validated, production-ready.",
    icon: Rocket,
    className: "",
    iconColor: "var(--automate-color)",
  },
  {
    title: "Enterprise Security",
    description:
      "E2E encryption, PII anonymization, full audit trail, sandboxed execution.",
    icon: Shield,
    className: "",
    iconColor: "var(--connect-color)",
  },
  {
    title: "Human in the Loop",
    description:
      "Nothing deploys without your approval. You stay in control, always.",
    icon: UserCheck,
    className: "",
    iconColor: "var(--monitor-color)",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "Track every agent \u2014 performance, cost, errors, ROI \u2014 in real time.",
    icon: BarChart3,
    className: "md:col-span-2",
    iconColor: "var(--monitor-color)",
  },
];

export function FeatureBento() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built for outcomes, not experiments.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={card.className}
            >
              <MagicCard
                className="h-full p-8 cursor-default flex flex-col justify-start"
                gradientColor="rgba(99, 102, 241, 0.1)"
              >
                <card.icon
                  className="w-10 h-10 mb-4"
                  style={{ color: card.iconColor }}
                  strokeWidth={1.5}
                />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
