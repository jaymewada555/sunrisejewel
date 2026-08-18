type IconProps = { className?: string };

// A restrained line-art icon set drawn to echo the facets of the Sunrise
// diamond mark. Used across category tiles, product cards and section
// dividers so the whole site shares one consistent illustrative language.

export function RingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="62" r="26" stroke="currentColor" strokeWidth="2.2" />
      <path d="M50 36 L38 20 H62 L50 36Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M38 20 L44 30 M62 20 L56 30 M44 30 H56" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function NecklaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M20 22c0 26 13 44 30 44s30-18 30-44"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M50 66 L42 80 H58 L50 66Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

export function EarringIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="35" cy="26" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path d="M35 33 v14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M35 47 L27 63 H43 L35 47Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="68" cy="26" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path d="M68 33 v14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M68 47 L60 63 H76 L68 47Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

export function BraceletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <ellipse cx="50" cy="50" rx="34" ry="18" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 44 q30 -14 60 0" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 4" />
    </svg>
  );
}

export function BangleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function NosepinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path d="M50 20 v34" stroke="currentColor" strokeWidth="2.2" />
      <path d="M50 54 L41 68 H59 L50 54Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M41 68 L50 76 L59 68" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function AnkletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path d="M14 52c14 18 58 18 72 0" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="50" cy="60" r="3.4" fill="currentColor" />
      <circle cx="35" cy="57" r="2.4" fill="currentColor" />
      <circle cx="65" cy="57" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function DiamondIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M28 36 L50 18 L72 36 L50 84 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M28 36 H72 M38 36 L50 18 M62 36 L50 18 M38 36 L50 84 M62 36 L50 84" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export const categoryIcon: Record<string, (p: IconProps) => React.ReactElement> = {
  Rings: RingIcon,
  Bracelets: BraceletIcon,
  Necklaces: NecklaceIcon,
  Earrings: EarringIcon,
  Bangles: BangleIcon,
  Nosepins: NosepinIcon,
  Anklets: AnkletIcon,
};

export function SunburstRays({ className }: IconProps) {
  const rays = Array.from({ length: 20 });
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      {rays.map((_, i) => {
        const angle = (i / rays.length) * Math.PI * 2;
        const inner = 42;
        const outer = i % 2 === 0 ? 96 : 78;
        const x1 = 100 + Math.cos(angle) * inner;
        const y1 = 100 + Math.sin(angle) * inner;
        const x2 = 100 + Math.cos(angle) * outer;
        const y2 = 100 + Math.sin(angle) * outer;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        );
      })}
      <path
        d="M82 100 L100 82 L118 100 L100 138 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
