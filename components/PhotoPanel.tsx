import Image from "next/image";
import { SunburstRays } from "./JewelIcons";

type PhotoPanelProps = {
  icon?: (p: { className?: string }) => React.ReactElement;
  tone?: "cream" | "blush" | "maroon";
  variant?: 1 | 2;
  className?: string;
  spin?: boolean;
  showIcon?: boolean;
};

const iconTone: Record<string, string> = {
  cream: "text-maroon-deep",
  blush: "text-maroon-deep",
  maroon: "text-cream",
};

export default function PhotoPanel({
  icon: Icon,
  tone = "cream",
  variant = 1,
  className = "",
  spin = false,
  showIcon = true,
}: PhotoPanelProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={`/images/dummy/${tone}-${variant}.jpg`}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            tone === "maroon"
              ? "linear-gradient(180deg, rgba(44,10,16,0.15), rgba(44,10,16,0.4))"
              : "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(94,18,32,0.08))",
        }}
      />
      <SunburstRays
        className={`absolute -top-8 -right-8 w-40 h-40 ${
          tone === "maroon" ? "text-cream" : "text-gold"
        } opacity-[0.18] ${spin ? "animate-slow-spin" : ""}`}
      />
      {showIcon && Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className={`w-[30%] h-[30%] ${iconTone[tone]} opacity-85 drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-[1.08]`}
          />
        </div>
      )}
    </div>
  );
}
