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
  title: "AgentLand — The AI Adoption Platform",
  description:
    "Your company is full of automation you can't see yet. AgentLand connects your systems, discovers every workflow worth automating, builds the agents, and deploys them — without an AI team.",
  openGraph: {
    title: "AgentLand — The AI Adoption Platform",
    description:
      "AgentLand discovers what to automate, builds the agents, and runs them — end to end, automatically.",
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
