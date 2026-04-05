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
    question: "Is this built yet?",
    answer:
      "We\u2019re building alongside our early design partners. Book a demo to see where we are.",
  },
  {
    question: "What systems do you connect to?",
    answer:
      "100+ integrations \u2014 CRMs, communication, databases, finance, PM. If it has an API, we can read it.",
  },
  {
    question: "Do I need an AI team?",
    answer: "No. That\u2019s the entire point.",
  },
  {
    question: "How long before results?",
    answer:
      "Connect in 10 minutes. First report in 24 hours. First agent live within days.",
  },
  {
    question: "Is my data safe?",
    answer:
      "End-to-end encryption. PII anonymization. Sandboxed execution. Full audit trail.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--indigo)] text-center mb-4"
        >
          Questions
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-normal text-center mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Answers to what
          <br />
          <span className="gradient-heading">you&apos;re wondering.</span>
        </motion.h2>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[var(--border-subtle)] last:border-0"
              >
                <AccordionTrigger className="px-0 py-5 text-left text-[var(--navy)] hover:text-[var(--navy)] hover:no-underline text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-5 text-[var(--text-secondary)] leading-relaxed">
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
