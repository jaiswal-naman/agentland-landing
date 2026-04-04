import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F]" />

      <div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          animation: "aurora 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)",
          animation: "aurora 15s ease-in-out infinite 5s",
        }}
      />
      <div
        className="absolute top-[20%] right-[20%] w-[40%] h-[40%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
          animation: "aurora 15s ease-in-out infinite 10s",
        }}
      />

      <DotPattern
        className={cn(
          "absolute inset-0 opacity-[0.05]",
          "[mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
        )}
      />

      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </div>
  );
}
