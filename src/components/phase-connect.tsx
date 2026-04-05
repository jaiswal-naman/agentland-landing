export function PhaseConnect() {
  return (
    <div className="relative h-[160px] w-full flex items-center justify-center">
      {/* Outer dashed ring */}
      <div
        className="absolute rounded-full border border-dashed"
        style={{
          width: 220,
          height: 220,
          borderColor: "var(--border-subtle)",
          animation: "spin 30s linear infinite reverse",
        }}
      />
      {/* Inner dashed ring */}
      <div
        className="absolute rounded-full border border-dashed"
        style={{
          width: 140,
          height: 140,
          borderColor: "var(--border-hover)",
          animation: "spin 20s linear infinite",
        }}
      />

      {/* Central hub */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 40,
          height: 40,
          background: "linear-gradient(135deg, #0EA5E9, #06B6D4)",
          boxShadow: "0 4px 20px rgba(14, 165, 233, 0.35)",
        }}
      >
        <span className="text-white text-lg leading-none">&#10033;</span>
      </div>

      {/* App icons on the orbits */}
      {[
        { label: "S", bg: "#1A73E8", angle: 0, ring: 70 },
        { label: "H", bg: "#FF7A59", angle: 60, ring: 70 },
        { label: "S", bg: "#611F69", angle: 120, ring: 70 },
        { label: "J", bg: "#2684FF", angle: 180, ring: 110 },
        { label: "G", bg: "#EA4335", angle: 270, ring: 110 },
        { label: "N", bg: "#191919", angle: 30, ring: 110 },
      ].map((app, i) => {
        const rad = (app.angle * Math.PI) / 180;
        const x = Math.cos(rad) * app.ring;
        const y = Math.sin(rad) * app.ring;
        return (
          <div
            key={i}
            className="absolute z-10 flex items-center justify-center rounded-lg text-white text-[11px] font-bold"
            style={{
              width: 28,
              height: 28,
              backgroundColor: app.bg,
              transform: `translate(${x}px, ${y}px)`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            {app.label}
          </div>
        );
      })}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
