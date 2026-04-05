"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const row1 = [
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
];

const row2 = [
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Linear", logo: "/logos/linear.svg" },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { name: "Zendesk", logo: "/logos/zendesk.svg" },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-8 flex items-center gap-2 opacity-30 hover:opacity-80 transition-all duration-300">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={40}
        className="h-8 w-auto"
        style={{ filter: "brightness(0) saturate(100%)" }}
      />
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="py-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[var(--text-secondary)] mb-8 text-sm"
      >
        Connects to the tools you already run
      </motion.p>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <Marquee pauseOnHover className="[--duration:40s] mb-4">
          {row1.map((item) => (
            <LogoCard key={item.name} {...item} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:35s]">
          {row2.map((item) => (
            <LogoCard key={item.name} {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
