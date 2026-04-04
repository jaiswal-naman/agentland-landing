"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this actually built yet?",
    answer:
      "We\u2019re building in parallel with our early design partners. Book a demo to see where we are and what\u2019s coming.",
  },
  {
    question: "How is this different from Zapier?",
    answer:
      "Zapier connects tools. AgentLand discovers what to automate, builds the agents, deploys them, and monitors everything. Full lifecycle, not just connectors.",
  },
  {
    question: "What systems do you connect to?",
    answer:
      "100+ integrations via MCP \u2014 CRMs, communication tools, databases, finance, project management, e-commerce. If it has an API, we can connect to it.",
  },
  {
    question: "Do I need an AI team to use this?",
    answer: "No. That\u2019s the entire point.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Connect your systems in 10 minutes. First discovery scan completes in hours. First agent deployed in days.",
  },
  {
    question: "Is my data safe?",
    answer:
      "End-to-end encryption, automatic PII anonymization, sandboxed agent execution, and a full audit trail. Your data never leaves your control.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Questions you&apos;re probably asking.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-2"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/[0.05] last:border-0"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-[var(--text-primary)] hover:text-[var(--text-primary)] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
