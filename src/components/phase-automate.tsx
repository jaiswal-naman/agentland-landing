"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ agentland deploy invoice-agent", color: "#0EA5E9", delay: 0 },
  { text: "→ Configuring field mappings...", color: "#6B7280", delay: 700 },
  { text: "→ Validating business rules...", color: "#6B7280", delay: 1400 },
  { text: "→ Deploying to sandbox...", color: "#6B7280", delay: 2100 },
  { text: "✓ Agent live. 14h/wk estimated savings", color: "#059669", delay: 2800 },
];

export function PhaseAutomate() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="h-[160px] w-full max-w-[340px] mx-auto rounded-lg overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#1E1E2E",
        fontFamily: "var(--font-mono), ui-monospace, monospace",
        fontSize: 10,
        lineHeight: 1.7,
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[9px] text-white/30">terminal</span>
      </div>

      {/* Terminal body */}
      <div className="px-3 py-2 flex-1 overflow-hidden">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} style={{ color: line.color }}>
            {line.text}
            {/* Highlight "14h/wk" in amber on the last line */}
            {i === lines.length - 1 && (
              <span style={{ color: "#D97706" }}></span>
            )}
          </div>
        ))}
        {visibleCount < lines.length && (
          <span
            className="inline-block animate-pulse"
            style={{
              width: 6,
              height: 12,
              backgroundColor: "#6B7280",
              marginTop: 2,
            }}
          />
        )}
      </div>
    </div>
  );
}
