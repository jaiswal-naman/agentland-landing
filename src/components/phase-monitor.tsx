"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

const metrics = [
  { label: "Agents Running", value: 12, color: "var(--automate-color)" },
  { label: "Tasks / hr", value: 847, color: "var(--monitor-color)" },
  { label: "Uptime", value: 99.9, suffix: "%", color: "var(--automate-color)" },
];

export function PhaseMonitor() {
  return (
    <div className="mx-auto max-w-[420px]">
      <div className="glass-card p-6 space-y-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="text-sm text-[var(--text-secondary)]">
              {m.label}
            </span>
            <span
              className="text-2xl font-bold"
              style={{ color: m.color, fontFamily: "var(--font-display)" }}
            >
              <NumberTicker value={m.value} />
              {m.suffix || ""}
            </span>
          </div>
        ))}

        <div className="flex items-end gap-1 h-16 pt-4 border-t border-white/[0.05]">
          {[40, 55, 35, 65, 50, 70, 60, 75, 85, 70, 90, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  "linear-gradient(to top, var(--monitor-color), transparent)",
                opacity: 0.6 + (i / 12) * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
