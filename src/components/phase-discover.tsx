export function PhaseDiscover() {
  const rows = [
    { name: "Invoice follow-ups", color: "#7C3AED", pct: 88 },
    { name: "CRM enrichment", color: "#0EA5E9", pct: 74 },
    { name: "Support routing", color: "#059669", pct: 61 },
  ];

  return (
    <div className="relative h-[160px] w-full max-w-[320px] mx-auto overflow-hidden rounded-lg bg-white/70 backdrop-blur-sm border border-[var(--border-subtle)]">
      {/* Scan line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{
          background: "linear-gradient(90deg, transparent, #7C3AED, #0EA5E9, transparent)",
          animation: "scan-move 3s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <div className="px-3 pt-3 pb-2">
        <div className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">
          AI Scan Results
        </div>
      </div>

      {/* Result rows */}
      <div className="px-3 space-y-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md bg-white/70 backdrop-blur-sm px-2.5 py-2 border border-[var(--border-subtle)]"
          >
            {/* Icon square */}
            <div
              className="flex-shrink-0 rounded"
              style={{
                width: 16,
                height: 16,
                backgroundColor: row.color,
                opacity: 0.85,
              }}
            />
            {/* Name */}
            <span className="text-[11px] font-medium text-[var(--text-mid)] flex-1 truncate">
              {row.name}
            </span>
            {/* Progress bar */}
            <div className="w-14 h-1.5 rounded-full bg-[var(--border-subtle)] overflow-hidden flex-shrink-0">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${row.pct}%`,
                  backgroundColor: row.color,
                }}
              />
            </div>
            {/* Score */}
            <span
              className="text-[11px] font-bold flex-shrink-0 tabular-nums"
              style={{ color: row.color, minWidth: 20, textAlign: "right" }}
            >
              {row.pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
