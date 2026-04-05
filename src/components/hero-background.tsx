export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#fafbff]" />

      {/* Gradient blob 1 — indigo, top-left */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-15%",
          left: "-8%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatBlob1 22s ease-in-out infinite",
        }}
      />

      {/* Gradient blob 2 — violet, top-right */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-10%",
          right: "-5%",
          width: "45%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatBlob2 25s ease-in-out infinite",
        }}
      />

      {/* Gradient blob 3 — sky, center-right */}
      <div
        className="absolute rounded-full"
        style={{
          top: "30%",
          right: "10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatBlob3 20s ease-in-out infinite",
        }}
      />

      {/* Gradient blob 4 — pink, bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-12%",
          left: "5%",
          width: "50%",
          height: "45%",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatBlob4 18s ease-in-out infinite",
        }}
      />

      {/* Gradient blob 5 — indigo/violet, bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-18%",
          right: "-6%",
          width: "48%",
          height: "48%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "floatBlob5 23s ease-in-out infinite",
        }}
      />

      {/* Dot grid pattern with edge fade mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, white 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, white 20%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafbff] to-transparent" />

      {/* Keyframe animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes floatBlob1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -20px) scale(1.05); }
              66% { transform: translate(-20px, 15px) scale(0.97); }
            }
            @keyframes floatBlob2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-25px, 25px) scale(0.96); }
              66% { transform: translate(20px, -15px) scale(1.04); }
            }
            @keyframes floatBlob3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(20px, 20px) scale(1.06); }
              66% { transform: translate(-30px, -10px) scale(0.95); }
            }
            @keyframes floatBlob4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-15px, -25px) scale(1.03); }
              66% { transform: translate(25px, 10px) scale(0.98); }
            }
            @keyframes floatBlob5 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(18px, -18px) scale(0.97); }
              66% { transform: translate(-22px, 22px) scale(1.05); }
            }
          `,
        }}
      />
    </div>
  );
}
