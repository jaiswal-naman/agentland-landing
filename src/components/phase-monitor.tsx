export function PhaseMonitor() {
  const barHeights = [40, 60, 45, 80, 65, 90, 70, 85];

  return (
    <div className="h-[160px] w-full max-w-[320px] mx-auto flex flex-col gap-2">
      {/* 2x2 metrics grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white/70 backdrop-blur-sm border border-[var(--border-subtle)] px-3 py-2 text-center">
          <div className="text-xl font-bold" style={{ color: "#059669" }}>
            98%
          </div>
          <div className="text-[10px] text-[var(--text-tertiary)]">Success rate</div>
        </div>
        <div className="rounded-lg bg-white/70 backdrop-blur-sm border border-[var(--border-subtle)] px-3 py-2 text-center">
          <div className="text-xl font-bold" style={{ color: "#D97706" }}>
            23h
          </div>
          <div className="text-[10px] text-[var(--text-tertiary)]">Saved / week</div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex-1 rounded-lg bg-white/70 backdrop-blur-sm border border-[var(--border-subtle)] px-3 py-2">
        <div className="flex items-end gap-1 h-full w-full">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, #D97706, #F59E0B)`,
                opacity: 0.65 + (i / barHeights.length) * 0.35,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
