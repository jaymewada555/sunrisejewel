"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const collections = [
  {
    name: "Aekta — The Wedding Edit",
    occasion: "Bridal",
    description:
      "Timeless bridal jewellery crafted for your most unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=90",
    position: "center",
  },
  {
    name: "Carats of Love",
    occasion: "Gifting",
    description:
      "A sparkling expression of love, made to celebrate every beautiful story.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90",
    position: "center",
  },
  {
    name: "Royal Green",
    occasion: "Statement",
    description:
      "Rich colour, refined diamonds and an unmistakable royal presence.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=90",
    position: "center",
  },
  {
    name: "Solaris Minimal",
    occasion: "Everyday",
    description:
      "Quietly elegant pieces designed to shine with you, every single day.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=90",
    position: "center",
  },
];

export default function Collections() {
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
            Our Collections
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
            Diamonds for Every Story
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
            Explore thoughtfully designed collections created for
            celebrations, everyday elegance and everything in between.
          </p>

          {/* Gold divider */}

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

          </div>

        </Reveal>


        {/* =====================================================
            COLLECTION GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            md:gap-6
          "
        >

          {collections.map((c, i) => (

            <Reveal
              key={c.name}
              delay={i * 0.08}
            >

              <Link
                href={`/products?occasion=${encodeURIComponent(
                  c.occasion
                )}`}
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