import {
  ArrowRight,
  Atom,
  BadgeCheck,
  BadgeDollarSign,
  BadgePercent,
  Coins,
  Crown,
  Factory,
  Gem,
  HeartHandshake,
  Landmark,
  Leaf,
  MountainSnow,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";

const labFeatures = [
  {
    icon: Atom,
    title: "Pure Carbon",
    description: "Chemically, physically & optically identical",
  },
  {
    icon: Leaf,
    title: "Ethical & Sustainable",
    description: "Conflict-free and eco-conscious choice",
  },
  {
    icon: BadgePercent,
    title: "Exceptional Value",
    description: "Premium beauty, more accessible",
  },
  {
    icon: ShieldCheck,
    title: "Hardness",
    description: "10 on the Mohs scale - Remarkably Durable.",
  },
];
const naturalFeatures = [
  {
    icon: MountainSnow,
    title: "Naturally Formed",
    description: "One of a kind, shaped by time & nature",
  },
  {
    icon: HeartHandshake,
    title: "Timeless Heritage",
    description: "A symbol of tradition, love & legacy",
  },
  {
    icon: Crown,
    title: "Exquisite Rarity",
    description: "Naturally rare, eternally precious",
  },
  {
    icon: ShieldCheck,
    title: "Hardness",
    description: "10 on the Mohs scale — the hardest natural gemstone.",
  },
];

const labSplashImage = "/images/aboutus/daimond_001.png";
const naturalSplashImage = "/images/aboutus/daimond_002.png";

const comparisonRows = [
  {
    icon: Factory,
    label: "Origin",
    lab: "Created in a controlled laboratory environment using advanced technology.",
    natural: "Formed naturally deep within the Earth over millions to billions of years and recovered through mining.",
  },
  {
    icon: Gem,
    label: "Composition",
    lab: "Pure carbon, with the same fundamental chemical composition as natural diamonds.",
    natural: "Pure carbon, crystallized naturally under extreme heat and pressure.",
  },
  {
    icon: Sparkles,
    label: "Brilliance",
    lab: "Exceptionally high brilliance and sparkle.",
    natural: "Exceptionally high brilliance and sparkle.",
  },
  {
    icon: Star,
    label: "Fire (Dispersion)",
    lab: "High — produces beautiful flashes of spectral colors.",
    natural: "High — produces beautiful flashes of spectral colors.",
  },
  {
    icon: BadgeCheck,
    label: "Color",
    lab: "Available in a variety of colors, including colorless and fancy colors.",
    natural: "Available in colorless, near-colorless, and naturally occurring fancy colors.",
  },
  {
    icon: ShieldCheck,
    label: "Clarity",
    lab: "Available across a range of clarity grades; many stones can appear eye-clean.",
    natural: "Natural inclusions and characteristics may be present, making each stone distinctive.",
  },
  {
    icon: Gem,
    label: "Hardness",
    lab: "10 on the Mohs scale, making it highly durable for everyday wear.",
    natural: "10 on the Mohs scale, making it the hardest natural gemstone.",
  },
  {
    icon: Coins,
    label: "Price",
    lab: "Generally more affordable than comparable natural diamonds.",
    natural: "Typically commands a higher price due to natural rarity, mining, and market demand.",
  },
  {
    icon: Leaf,
    label: "Ethical & Environmental Considerations",
    lab: "Avoids traditional diamond mining; environmental impact depends on how the diamond is produced and the energy source used.",
    natural: "Requires mining, which can have environmental and social impacts; responsible sourcing can help address these concerns.",
  },
  {
    icon: BadgeCheck,
    label: "Grading & Certification",
    lab: "Can be independently graded and certified by recognized gemological laboratories using established diamond-grading standards.",
    natural: "Graded and certified by recognized gemological laboratories using established diamond-grading standards.",
  },
  {
    icon: Sparkles,
    label: "Market Availability",
    lab: "Increasingly available in a wide range of shapes, sizes, colors, and qualities.",
    natural: "Widely available through the established global diamond market.",
  },
  {
    icon: Star,
    label: "Popularity",
    lab: "Growing in popularity among customers seeking value, modern innovation, and an alternative to mined diamonds.",
    natural: "Traditionally valued for their rarity, natural origin, heritage, and long-standing desirability.",
  },
  {
    icon: TreePine,
    label: "Uniqueness",
    lab: "Each lab-grown diamond has its own characteristics, while its origin is created through a controlled process.",
    natural: "Each natural diamond has unique characteristics shaped by its individual geological journey.",
  },
];

export default function LabGrownVsNatural() {
  return (
    <section className="section relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#fffaf6_0%,#f9f0ea_28%,#f2e5dc_60%,#eadfd4_100%)] px-4 sm:px-6 lg:px-10">
      <div className="container-lg relative z-10">
        <div className="mb-8 text-center md:mb-12">
          <span className="eyebrow">Discover the difference</span>

          <h2 className="mt-3 font-display text-[26px] leading-[1.05] tracking-[-0.04em] text-maroon-deep md:text-[2.2rem]">
            Lab-Grown vs Natural Diamonds
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[12px] leading-relaxed text-ink-soft md:text-[13px]">
            Same brilliance. Different origins. Choose what matters to you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[30px] border border-[#d8c8b8] bg-[linear-gradient(135deg,#f4e5e1_0%,#f8eeeb_43%,#f5e7e3_100%)] px-5 pb-5 pt-7 shadow-[0_18px_40px_rgba(91,67,38,0.08)] sm:px-8 sm:pb-7 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.55),transparent_37%),radial-gradient(circle_at_80%_60%,rgba(196,155,147,0.12),transparent_40%)]" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-center gap-3 text-[#b36d5e]">
                <Atom className="h-4 w-4" strokeWidth={1.8} />
                <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#b36d5e] sm:text-[11px]">
                  Lab-grown diamonds
                </span>
              </div>

              <h3 className="text-center font-display text-[26px] leading-[1.06] tracking-[-0.05em] text-[#3b2920] md:text-[32px]">
                Created by Innovation,
                <br />
                Perfected in Labs
              </h3>

              <p className="mx-auto mt-5 max-w-[23rem] text-center text-[12px] leading-[1.7] text-[#5d4a42] md:text-[13px]">
                Crafted in a controlled lab environment using advanced technology to deliver exceptional brilliance.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5">
                {labFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-full bg-[#f7e9e3]/65 px-4 py-3 backdrop-blur-[1px]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d7b7a6] bg-[#f4ddd2] text-[#b76b5f]">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <div className="font-display text-[16px] leading-none tracking-[-0.04em] text-[#3b2920] md:text-[18px]">
                          {item.title}
                        </div>
                        <p className="mt-1 text-[12px] leading-6 text-[#5e4f49] md:text-[12px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="relative z-10 mt-7 flex justify-center">
              <div className="relative h-[170px] w-[290px] sm:h-[200px] sm:w-[360px] lg:h-[220px] lg:w-[390px]">
                <div className="absolute inset-x-[12%] bottom-0 h-[20%] rounded-full bg-[rgba(128,96,86,0.16)] blur-[24px]" />
                <img
                  src={labSplashImage}
                  alt="Lab-grown diamond ring"
                  className="relative h-full w-full object-contain drop-shadow-[0_22px_30px_rgba(70,46,35,0.18)] ml-[18%] sm:ml-[18%] lg:ml-[18%]"
                />
              </div>
            </div> */}
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#cbd5e1] bg-[linear-gradient(135deg,#ddeaf6_0%,#edf3fb_30%,#e9eef4_100%)] px-5 pb-5 pt-7 shadow-[0_18px_40px_rgba(91,67,38,0.08)] sm:px-8 sm:pb-7 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_15%,rgba(255,255,255,0.75),transparent_30%),radial-gradient(circle_at_25%_72%,rgba(160,175,188,0.14),transparent_35%)]" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-center gap-3 text-[#5d7d90]">
                <MountainSnow className="h-4 w-4" strokeWidth={1.8} />
                <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#5d7d90] sm:text-[11px]">
                  Natural diamonds
                </span>
              </div>

              <h3 className="text-center font-display text-[26px] leading-[1.06] tracking-[-0.05em] text-[#3b2920] md:text-[32px]">
                Born from Nature,
                <br />
                Timeless & Rare
              </h3>

              <p className="mx-auto mt-5 max-w-[23rem] text-center text-[12px] leading-[1.7] text-[#4f5f6b] md:text-[13px]">
                Formed deep within the Earth over billions of years. A true gift of nature.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5">
                {naturalFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-full bg-[#edf1f6]/65 px-4 py-3 backdrop-blur-[1px]">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b9d0e1] bg-[#dfeaf6] text-[#5c7d8e]">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <div className="font-display text-[16px] leading-none tracking-[-0.04em] text-[#3b2920] md:text-[18px]">
                          {item.title}
                        </div>
                        <p className="mt-1 text-[12px] leading-6 text-[#596d7f] md:text-[12px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="relative z-10 mt-7 flex justify-center">
              <div className="relative h-[170px] w-[290px] sm:h-[200px] sm:w-[360px] lg:h-[220px] lg:w-[390px]">
                <div className="absolute inset-x-[12%] bottom-0 h-[20%] rounded-full bg-[rgba(61,81,95,0.16)] blur-[24px]" />
                <img
                  src={naturalSplashImage}
                  alt="Natural diamond jewelry"
                  className="relative h-full w-full object-contain drop-shadow-[0_22px_30px_rgba(36,52,68,0.18)] ml-[18%] sm:ml-[18%] lg:ml-[18%]"
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="mt-10 overflow-hidden rounded-[28px] border border-[#e0d1bf] bg-[rgba(255,255,255,0.35)] shadow-[0_18px_35px_rgba(76,51,28,0.05)] backdrop-blur-[2px]">
          <div className="hidden border-b border-[#e7d9c7] bg-[#f8f0e7] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a5347] md:grid md:grid-cols-[1.2fr_1fr_1fr]">
            <div>Feature</div>
            <div className="text-center">Lab-Grown</div>
            <div className="text-center">Natural</div>
          </div>

          <div className="divide-y divide-[#eadcc8]">
            {comparisonRows.map((row) => {
              const Icon = row.icon;

              return (
                <div key={row.label} className="grid gap-3 px-4 py-4 md:grid-cols-[1.2fr_1fr_1fr] md:gap-5 md:px-6 md:py-5">
                  <div className="flex items-center gap-3 text-[#3b2920]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b7a6] bg-[#f7e9e3] text-[#b76b5f]">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <span className="font-display text-[16px] leading-none tracking-[-0.03em] md:text-[18px]">
                      {row.label}
                    </span>
                  </div>

                  <p className="text-[12px] leading-6 text-[#5e4f49] md:text-center md:text-[12.5px]">
                    {row.lab}
                  </p>

                  <p className="text-[12px] leading-6 text-[#596d7f] md:text-center md:text-[12.5px]">
                    {row.natural}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
