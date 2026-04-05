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
    question: "What does AgentLand do?",
    answer:
      "AgentLand is an observability platform for AI agents. It intercepts every agent call \u2014 tracks costs, catches failures, flags PII, and enforces compliance. Think Datadog, but for AI agents.",
  },
  {
    question: "Which AI providers do you support?",
    answer:
      "OpenAI, Anthropic, AWS Bedrock, Azure OpenAI, Vertex AI, Cohere \u2014 and any OpenAI-compatible endpoint. One proxy for all of them.",
  },
  {
    question: "How much latency does it add?",
    answer: "Less than 5ms p99. Your agents won\u2019t notice.",
  },
  {
    question: "What happens if AgentLand goes down?",
    answer:
      "Your agents keep working. AgentLand is a passthrough proxy \u2014 if it\u2019s unreachable, traffic routes directly to the provider.",
  },
  {
    question: "Is my data safe?",
    answer:
      "End-to-end encryption. PII detection and anonymization. Full audit trail. SOC 2 and GDPR compliant.",
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
          Questions.
          <br />
          <span className="gradient-heading">Answered.</span>
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
