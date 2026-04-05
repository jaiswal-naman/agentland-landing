import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AgentLand — Observability for AI Agents",
  description:
    "See every AI agent running in your company. Track costs, detect PII, monitor performance, enforce compliance — one dashboard for every agent, every model, every call.",
  openGraph: {
    title: "AgentLand — Observability for AI Agents",
    description:
      "See every AI agent. Track costs. Detect PII. Monitor performance. One dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="noise-overlay min-h-full flex flex-col bg-white text-[var(--navy)]">
        {children}
      </body>
    </html>
  );
}
