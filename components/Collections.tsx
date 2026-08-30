"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "@/components/Reveal";

const collections = [
  {
    name: "Heart Cut",
    occasion: "Diamond Type",
    description:
      "A romantic silhouette with distinctive facets that make every glance feel personal.",
    image: "/images/products/JPG/R (1).jpg",
    position: "center",
  },
  {
    name: "Pear Cut",
    occasion: "Diamond Type",
    description:
      "A graceful teardrop profile that brings elegant length and luminous movement.",
    image: "/images/products/JPG/R (100).jpg",
    position: "center",
  },
  {
    name: "Emerald Cut",
    occasion: "Diamond Type",
    description:
      "Clean step-cut facets with a refined, architectural glow and quiet confidence.",
    image: "/images/products/JPG/1 (10).jpg",
    position: "center",
  },
  {
    name: "Round Brilliant",
    occasion: "Diamond Type",
    description:
      "The classic choice for maximum fire, sparkle and timeless diamond elegance.",
    image: "/images/products/JPG/ER343 (10).jpg",
    position: "center",
  },
];

export default function Collections() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section className="section relative overflow-hidden bg-[#fbf8f3]">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-48
          -right-48
          w-[520px]
          h-[520px]
          rounded-full
          bg-gold/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-48
          w-[520px]
          h-[520px]
          rounded-full
          bg-maroon/5
          blur-3xl
        "
      />

      <div className="container-lg relative z-10">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <Reveal className="text-center mb-12 md:mb-16">

          <span className="eyebrow">
            Diamond Types
          </span>

          <h2
            className="
              font-display
              text-3xl
              md:text-[2.6rem]
              text-maroon-deep
              mt-3
            "
          >
            Choose Your Perfect Diamond
          </h2>

          <p
            className="
              text-sm
              text-ink-soft
              max-w-xl
              mx-auto
              mt-4
              leading-relaxed
            "
          >
            A curated collection of diamonds, chosen for beauty and brilliance.
          </p>

          {/* Gold divider */}
{/* 
          <div className="flex items-center justify-center gap-3 mt-6">

            <span className="w-12 h-px bg-gold/30" />

            <Sparkles
              className="
                w-3.5
                h-3.5
                text-gold
              "
            />

            <span className="w-12 h-px bg-gold/30" />

          </div> */}

        </Reveal>


        {/* =====================================================
            COLLECTION GRID
        ====================================================== */}

        <div className="overflow-hidden" ref={emblaRef}>
          <div
            className="
              flex
              -ml-3
              md:-ml-4
              lg:grid
              lg:grid-cols-4
              lg:gap-6
            "
          >

          {collections.map((c, i) => (

            <Reveal
              key={c.name}
              delay={i * 0.08}
              className="
                min-w-0
                pl-3
                flex-[0_0_82%]
                sm:flex-[0_0_50%]
                md:pl-4
                lg:flex-none
                lg:min-w-0
                lg:pl-0
              "
            >

              <Link
                href="/products"
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[26px]
                  bg-maroon-deep
                  shadow-[0_12px_35px_rgba(63,12,21,0.10)]
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(63,12,21,0.18)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    aspect-[3/4]
                    overflow-hidden
                  "
                >

                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      group-hover:scale-110
                    "
                    style={{
                      objectPosition: c.position,
                    }}
                  />

                  {/* Dark luxury gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#3f0c15]
                      via-[#3f0c15]/25
                      to-transparent
                      opacity-95
                    "
                  />

                  {/* Top soft gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-white/10
                      via-transparent
                      to-transparent
                      opacity-50
                    "
                  />

                  {/* =================================================
                      ANIMATED LIGHT SWEEP
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-0
                      -left-[100%]
                      w-[70%]
                      h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      skew-x-[-18deg]
                      transition-all
                      duration-[1400ms]
                      group-hover:left-[130%]
                    "
                  />

                  {/* =================================================
                      COLLECTION NUMBER
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-full
                      bg-black/10
                      backdrop-blur-sm
                      border
                      border-white/20
                      text-white/80
                      text-[10px]
                      tracking-[0.15em]
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>


                  {/* =================================================
                      GOLD DOT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-7
                      right-7
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-gold-light
                      shadow-[0_0_15px_rgba(220,180,90,0.7)]
                      transition-transform
                      duration-500
                      group-hover:scale-150
                    "
                  />


                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-6
                      right-6
                      bottom-6
                    "
                  >

                    {/* Occasion */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mb-3
                      "
                    >

                      <span
                        className="
                          h-px
                          w-7
                          bg-gold
                          transition-all
                          duration-500
                          group-hover:w-12
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-gold-light
                        "
                      >
                        {c.occasion}
                      </span>

                    </div>


                    {/* Name */}

                    <h3
                      className="
                        font-display
                        text-white
                        text-xl
                        md:text-[1.35rem]
                        leading-[1.15]
                        max-w-[15rem]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {c.name}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        text-white/60
                        text-xs
                        leading-relaxed
                        mt-3
                        max-w-[17rem]
                        opacity-0
                        translate-y-3
                        max-h-0
                        overflow-hidden
                        transition-all
                        duration-500
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:max-h-20
                      "
                    >
                      {c.description}
                    </p>


                    {/* Explore */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-4
                        text-gold-light
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        transition-all
                        duration-500
                        group-hover:gap-4
                      "
                    >
                      <span>
                        Explore Collection
                      </span>

                      <ArrowRight
                        className="
                          w-3.5
                          h-3.5
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>

                  </div>

                </div>

              </Link>

            </Reveal>

          ))}

          </div>
        </div>


        {/* =====================================================
            BOTTOM LINK
        ====================================================== */}

        <Reveal
          delay={0.35}
          className="flex justify-center mt-10"
        >

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-2
              text-maroon
              text-xs
              uppercase
              tracking-[0.2em]
              border-b
              border-maroon/30
              pb-2
              transition-all
              duration-300
              hover:border-gold
              hover:text-gold
              hover:gap-4
            "
          >
            View All Jewellery

            <ArrowRight className="w-4 h-4" />
          </Link>

        </Reveal>

      </div>
    </section>
  );
}