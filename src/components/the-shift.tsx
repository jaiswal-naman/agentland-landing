"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

const rows = [
  { label: "Discover what to automate", traditional: "Manual", zapier: "Manual", agentland: "Automatic" },
  { label: "Build agents", traditional: "Your team", zapier: "Your team", agentland: "Automatic" },
  { label: "Deploy", traditional: "Your team", zapier: "Your team", agentland: "Automatic" },
  { label: "Monitor & optimize", traditional: "Your team", zapier: "Manual", agentland: "Automatic" },
];

export function TheShift() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Not a framework. Not a tool.
          <br />
          The AI adoption layer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Celonis built a $13B company by discovering process inefficiencies. But
          discovery alone doesn&apos;t fix anything. Zapier connects tools but
          can&apos;t think. LangChain gives you building blocks but expects you to
          build.
          <br />
          <br />
          AgentLand is the first platform that does all four — discovery, building,
          deployment, and monitoring — end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="p-4 text-sm font-medium text-[var(--text-tertiary)]" />
                  <th className="p-4 text-sm font-medium text-[var(--text-tertiary)]">
                    Traditional AI
                  </th>
                  <th className="p-4 text-sm font-medium text-[var(--text-tertiary)]">
                    Zapier / Make
                  </th>
                  <th className="p-4 text-sm font-medium text-[var(--text-primary)] relative">
                    AgentLand
                    <BorderBeam size={60} duration={4} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="border-b border-white/[0.05] last:border-0"
                  >
                    <td className="p-4 text-sm text-[var(--text-secondary)]">
                      {row.label}
                    </td>
                    <td className="p-4 text-sm text-[var(--text-tertiary)]">
                      {row.traditional}
                    </td>
                    <td className="p-4 text-sm text-[var(--text-tertiary)]">
                      {row.zapier}
                    </td>
                    <td className="p-4 text-sm font-medium text-[var(--automate-color)]">
                      {row.agentland}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
