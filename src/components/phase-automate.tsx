"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ agentland deploy lead-qualifier", delay: 0 },
  { text: "\u2192 Validating template...", delay: 800 },
  { text: "\u2192 Security gate: PASSED", delay: 1600 },
  { text: "\u2192 Sandbox test: PASSED", delay: 2400 },
  { text: "\u2192 Deploying to production...", delay: 3200 },
  { text: "\u2713 Agent live. Monitoring active.", delay: 4000 },
];

export function PhaseAutomate() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), lines[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass-card mx-auto max-w-[420px] p-6 font-mono text-sm">
      {lines.slice(0, visibleLines).map((line, i) => (
        <div
          key={i}
          className={`leading-relaxed ${
            i === lines.length - 1
              ? "text-[var(--automate-color)]"
              : "text-[var(--text-secondary)]"
          }`}
        >
          {line.text}
        </div>
      ))}
      {visibleLines < lines.length && (
        <span className="inline-block w-2 h-4 bg-[var(--text-secondary)] animate-pulse" />
      )}
    </div>
  );
}
