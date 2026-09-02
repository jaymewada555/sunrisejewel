import Image from "next/image";
import Link from "next/link";
import { SunburstRays } from "@/components/JewelIcons";
import Reveal from "@/components/Reveal";
import SunriseAssurance from "@/components/SunriseAssurance";

export const metadata = {
  title: "About Us | Sunrise Diamond & Jewels",
  description:
    "The story, vision and philosophy behind Sunrise Diamond & Jewels — a modern luxury house reimagining fine jewellery through innovation, purpose and brilliance.",
};

const pillars = [
  {
    title: "Lab-Grown Brilliance",
    text: "Exceptional diamonds created through advanced technology, offering the same beauty and sparkle while embracing a more conscious future.",
  },
  {
    title: "Crafted with Purpose",
    text: "Every design is shaped with precision, ethics and elegance in mind — making luxurious jewellery meaningful to own and beautiful to wear.",
  },
  {
    title: "Modern Luxury",
    text: "We celebrate innovation without compromising on quality, artistry, or the emotional value of fine jewellery.",
  },
];

const missionPoints = [
  "Redefining luxury through high-quality lab-grown diamonds and fine jewellery.",
  "Making brilliance more accessible without compromising beauty, quality, or elegance.",
  "Embracing innovation to raise the standards of the modern diamond industry.",
  "Championing responsible luxury through thoughtful, transparent choices.",
  "Celebrating Indian excellence through contemporary design and skilled craftsmanship.",
  "Building lasting trust through authenticity, integrity, and exceptional customer experience.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <SunburstRays className="sunburst-mark w-[460px] h-[460px] text-gold-light -left-32 -top-32 animate-slow-spin" />
        <Reveal className="container-lg relative py-16 md:py-24 text-center">
          <span className="eyebrow text-gold-light">The Future of Fine Jewellery</span>
          <h1 className="font-display text-cream text-3xl md:text-5xl mt-3 max-w-4xl mx-auto leading-tight">
            Where brilliance meets innovation.
            <br />
            <span className="italic font-light text-gold-light/90">Where beauty meets purpose.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-cream/80">
            Luxury is evolving. At Sunrise Diamonds &amp; Jewels, we are redefining what fine jewellery should represent — extraordinary beauty, conscious choices, and timeless meaning.
          </p>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="container-lg grid grid-cols-1 gap-14 items-center md:grid-cols-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="font-display text-3xl text-maroon-deep mt-3 leading-tight">
              Luxury, reimagined for a new generation.
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
              SUNRISE Diamonds &amp; Jewels Pvt. Ltd. brings together the beauty of fine jewellery and the innovation of lab-grown diamonds — a new expression of brilliance shaped by science, technology, and human creativity.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
              Created in controlled laboratory environments, our diamonds mirror the extraordinary sparkle and character of stones formed deep within the Earth. For those who believe luxury should be as meaningful as it is magnificent, this is a conscious way to celebrate beauty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/find-us" className="btn-primary w-fit">
                Book a Consultation
              </Link>
              <a href="#vision" className="btn-outline w-fit">
                Our Vision
              </a>
            </div>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px] bg-blush shadow-[0_30px_80px_rgba(63,12,21,0.10)]">
            <Image
              src="/images/products/featherline-tennis-bracelet.jpg"
              alt="Fine luxury diamond jewellery"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-white/10" />
          </div>
        </Reveal>
      </section>

      <SunriseAssurance />

      <section className="section bg-cream-deep/35">
        <div className="container-lg">
          <Reveal className="text-center mb-12">
            <span className="eyebrow">Why We Exist</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              Beauty without compromise.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08} className="h-full">
                <div className="h-full rounded-[26px] border border-line bg-white p-7 shadow-[0_18px_45px_rgba(63,12,21,0.04)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-lg font-semibold text-maroon-deep">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-2xl text-maroon-deep">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="section bg-[#fffaf4]">
        <div className="container-lg grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Our Vision</span>
            <h2 className="mt-3 font-display text-3xl md:text-[2.5rem] text-maroon-deep leading-tight">
              To redefine luxury through brilliance with purpose.
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">
              We envision a future where exquisite jewellery and conscious living move together. A future where luxury celebrates innovation, sustainability, ethical responsibility, and timeless beauty — while inspiring people to choose pieces that are as meaningful as they are magnificent.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
              Our vision is to create a new standard of luxury — one that leaves a lighter footprint, feels personal, and shines with intention.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-[30px] border border-line bg-maroon-deep p-8 text-cream shadow-[0_30px_80px_rgba(63,12,21,0.12)]">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cream/10 blur-2xl" />
            <p className="relative text-xs uppercase tracking-[0.22em] text-gold-light">Our Philosophy</p>
            <h3 className="relative mt-6 font-display text-3xl leading-tight text-cream">
              Beauty without compromise.<br />
              Innovation without boundaries.<br />
              Luxury with purpose.
            </h3>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="section">
        <div className="container-lg">
          <Reveal className="text-center mb-12">
            <span className="eyebrow">Our Mission</span>
            <h2 className="font-display text-3xl md:text-[2.4rem] text-maroon-deep mt-3">
              Creating jewellery that shines brighter because it stands for more.
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {missionPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <div className="flex items-start gap-4 rounded-[22px] border border-line bg-white p-5 shadow-[0_10px_30px_rgba(63,12,21,0.03)]">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-maroon-deep">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="container-lg text-center">
          <span className="eyebrow">SUNRISE Diamonds &amp; Jewels Pvt. Ltd.</span>
          <h2 className="mt-3 font-display text-3xl md:text-[2.8rem] text-maroon-deep leading-tight">
            This is not just luxury.
            <br />
            This is luxury, reimagined. 💎
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-ink-soft">
            Designed for a generation that believes brilliance should be as thoughtful as it is beautiful, Sunrise stands for timeless beauty, advanced origin, and a more conscious way to celebrate life&apos;s most meaningful moments.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/book-us" className="btn-primary">
              Start Your Story
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
