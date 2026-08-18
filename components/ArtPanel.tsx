import { SunburstRays } from "./JewelIcons";

type ArtPanelProps = {
  icon: (p: { className?: string }) => React.ReactElement;
  tone?: "cream" | "blush" | "maroon";
  className?: string;
  spin?: boolean;
};

const tones: Record<string, string> = {
  cream: "from-[#f8f1e4] via-[#efe1cb] to-[#e2cba8]",
  blush: "from-[#f5e3d8] via-[#eecab5] to-[#dba888]",
  maroon: "from-[#8a2c3b] via-[#5e1220] to-[#2c0a10]",
};

const iconTone: Record<string, string> = {
  cream: "text-maroon-deep",
  blush: "text-maroon-deep",
  maroon: "text-cream",
};

export default function ArtPanel({ icon: Icon, tone = "cream", className = "", spin = false }: ArtPanelProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br ${tones[tone]} shimmer ${className}`}
    >
      {/* soft vignette light, like a studio spotlight on the piece */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.55), transparent 55%)",
        }}
      />
      <SunburstRays
        className={`absolute -top-8 -right-8 w-44 h-44 ${
          tone === "maroon" ? "text-cream" : "text-gold"
        } opacity-[0.14] ${spin ? "animate-slow-spin" : ""} transition-transform duration-700 group-hover:scale-110`}
      />
      <SunburstRays
        className={`absolute -bottom-10 -left-10 w-32 h-32 ${
          tone === "maroon" ? "text-cream" : "text-maroon"
        } opacity-[0.08]`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className={`w-[38%] h-[38%] ${iconTone[tone]} opacity-90 drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.08]`}
        />
      </div>
    </div>
  );
}
