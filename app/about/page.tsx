import { SunburstRays, DiamondIcon } from "@/components/JewelIcons";
import ArtPanel from "@/components/ArtPanel";
import { RingIcon, NecklaceIcon, EarringIcon } from "@/components/JewelIcons";
import { ShieldCheck, Leaf, Gem, HandHeart } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us | Sunrise Diamond & Jewels",
  description:
    "The story, values and craftsmanship behind Sunrise Diamond & Jewels — a house built on certified diamonds and honest pricing.",
};

const milestones = [
  { year: "2011", text: "Sunrise begins as a family diamond trading house in Mumbai." },
  { year: "2016", text: "Opened our first boutique studio and in-house design atelier." },
  { year: "2021", text: "Introduced certified lab-grown diamonds alongside natural stones." },
  { year: "2025", text: "Serving a growing family of customers across India, on-demand." },
];

const values = [
  { icon: ShieldCheck, title: "Certified, Always", text: "Every stone we sell is graded by GIA, IGI or SGL — no exceptions." },
  { icon: Leaf, title: "Ethically Sourced", text: "Full traceability on origin, whether natural or lab-grown." },
  { icon: Gem, title: "Made By Hand", text: "In-house karigars hand-finish every setting to a jeweller's eye." },
  { icon: HandHeart, title: "Honest Pricing", text: "Rate cards, making charges and stone value, shown line by line." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <SunburstRays className="sunburst-mark w-[460px] h-[460px] text-gold-light -left-32 -top-32 animate-slow-spin" />
        <Reveal className="container-lg relative py-16 md:py-24 text-center">
          <span className="eyebrow text-gold-light">Our Story</span>
          <h1 className="font-display text-cream text-3xl md:text-5xl mt-3 max-w-2xl mx-auto leading-tight">
            Designed for Today,
            <br />
            <span className="italic font-light">Inspired by Tomorrow</span>
          </h1>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="container-lg grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="font-display text-3xl text-maroon-deep mt-3 leading-tight">
              A house built on certified stones and honest craft
            </h2>
            <p className="text-ink-soft leading-relaxed mt-5 text-[0.95rem]">
              Sunrise Diamond &amp; Jewels was founded on a simple idea: that fine
              diamond jewellery should be as trustworthy as it is beautiful. What
              began as a small diamond trading desk has grown into a full design
              atelier — where every ring, chain and pair of earrings is graded,
              costed and finished under one roof.
            </p>
            <p className="text-ink-soft leading-relaxed mt-4 text-[0.95rem]">
              We work with both natural and lab-grown diamonds, and we&apos;ll
              always tell you exactly which one you&apos;re holding, and why it
              costs what it does.
            </p>
            <Link href="/book-us" className="btn-outline mt-8 w-fit">
              Book a Consultation
            </Link>
          </div>
          <ArtPanel icon={DiamondIcon} tone="blush" className="aspect-[4/5] rounded-sm" />
        </Reveal>
      </section>

      <section className="section bg-blush/50">
        <div className="container-lg">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              Our Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-maroon" strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-base text-ink">{v.title}</h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">Our Journey</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              Milestones
            </h2>
          </Reveal>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1} className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <span className="font-display text-lg text-gold">{m.year}</span>
                  {i !== milestones.length - 1 && <div className="w-px flex-1 bg-line my-2" />}
                </div>
                <p className="text-sm text-ink-soft leading-relaxed pb-10">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blush/50">
        <div className="container-lg">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">Craft</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              From Sketch to Setting
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Reveal delay={0}><ArtPanel icon={RingIcon} tone="cream" className="aspect-[4/5] rounded-sm" /></Reveal>
            <Reveal delay={0.1}><ArtPanel icon={NecklaceIcon} tone="maroon" className="aspect-[4/5] rounded-sm" /></Reveal>
            <Reveal delay={0.2}><ArtPanel icon={EarringIcon} tone="cream" className="aspect-[4/5] rounded-sm" /></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
