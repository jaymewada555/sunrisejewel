import Image from "next/image";
import { SunburstRays } from "@/components/JewelIcons";
import SunriseAssurance from "@/components/SunriseAssurance";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us | Sunrise Diamond & Jewels",
  description:
    "The story, values and craftsmanship behind Sunrise Diamond & Jewels — a house built on certified diamonds and honest pricing.",
};

const milestones = [
  {
    year: "2011",
    text: "Sunrise begins as a family diamond trading house in Mumbai.",
    image: "/images/products/featherline-tennis-bracelet.jpg",
    alt: "Diamond jewellery worn for an everyday moment",
  },
  {
    year: "2016",
    text: "Opened our first boutique studio and in-house design atelier.",
    image: "/images/products/cascade-choker-necklace.jpg",
    alt: "Statement diamond necklace from the Sunrise atelier",
  },
  {
    year: "2021",
    text: "Introduced certified lab-grown diamonds alongside natural stones.",
    image: "/images/products/kada-heritage-bracelet.jpg",
    alt: "Heritage gold bracelet with diamond detailing",
  },
  {
    year: "2025",
    text: "Serving a growing family of customers across India, on-demand.",
    image: "/images/products/lumina-oval-hoops.jpg",
    alt: "Diamond oval hoop earrings",
  },
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
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-blush">
            <Image
              src="/images/products/featherline-tennis-bracelet.jpg"
              alt="Diamond jewellery worn for an everyday moment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/35 via-transparent to-white/10" />
          </div>
        </Reveal>
      </section>

      <SunriseAssurance />

      <section className="section bg-cream-deep/35">
        <div className="container-lg">
          <Reveal className="text-center mb-14">
            <span className="eyebrow">Our Journey</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              A Legacy in the Making
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
              From a family-led diamond desk to a modern jewellery house, every chapter
              has been shaped by trust, craft, and the people who wear our pieces.
            </p>
          </Reveal>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gold/35 md:left-1/2" />
            <div className="space-y-10 md:space-y-14">
              {milestones.map((m, i) => (
                <Reveal
                  key={m.year}
                  delay={i * 0.1}
                  className="relative grid gap-6 pl-12 md:grid-cols-2 md:gap-14 md:pl-0"
                >
                  <span className="absolute left-0 top-8 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-cream text-xs font-semibold tracking-[0.12em] text-maroon md:left-1/2 md:-translate-x-1/2">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className={`relative aspect-[16/10] overflow-hidden rounded-sm border border-line bg-white shadow-[0_14px_35px_rgba(64,33,27,0.07)] ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <Image
                      src={m.image}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className={`flex flex-col justify-center ${i % 2 === 0 ? "md:order-2" : "md:order-1 md:text-right"}`}>
                    <span className="font-display text-4xl leading-none text-gold/80">{m.year}</span>
                    <h3 className="mt-3 font-display text-xl text-maroon-deep">
                      {i === 0 ? "The First Spark" : i === 1 ? "A Place to Create" : i === 2 ? "More Choice, Same Trust" : "A Growing Community"}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft md:ml-0 md:max-w-sm">
                      {m.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
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
            <Reveal delay={0} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-cream">
              <Image
                src="/images/products/kada-heritage-bracelet.jpg"
                alt="Heritage gold bracelet with diamond detailing"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
            <Reveal delay={0.1} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-maroon">
              <Image
                src="/images/products/cascade-choker-necklace.jpg"
                alt="Statement diamond necklace from the Sunrise atelier"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
            <Reveal delay={0.2} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-cream">
              <Image
                src="/images/products/lumina-oval-hoops.jpg"
                alt="Diamond oval hoop earrings"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
