"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { categories } from "@/lib/data";
import Reveal from "@/components/Reveal";

const categoryImages: Record<string, string> = {
  Rings:
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=90",

  Necklaces:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=90",

  Earrings:
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=90",

  Bracelets:
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=90",

  Pendants:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=90",

  Bangles:
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=90",

  "Mangalsutra":
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=90",

  "Bridal Jewellery":
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=90",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=90";

export default function Categories() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section className="section relative overflow-hidden bg-[#fbf7f1]">

      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-gold/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[420px]
          h-[420px]
          rounded-full
          bg-maroon/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="container-lg relative z-10">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <Reveal className="text-center mb-12 md:mb-14">

          <span className="eyebrow">
            Curated For You
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
            Shop by Category
          </h2>

          <p
            className="
              text-sm
              text-ink-soft
              mt-3
              max-w-md
              mx-auto
              leading-relaxed
            "
          >
            Discover jewellery designed to become part of
            your everyday moments and unforgettable occasions.
          </p>

          {/* Small gold divider */}

          <div className="flex items-center justify-center gap-3 mt-6">

            <span className="h-px w-12 bg-gold/30" />

            <span className="w-1.5 h-1.5 rounded-full bg-gold" />

            <span className="h-px w-12 bg-gold/30" />

          </div>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-ink-soft/70
              mt-5
            "
          >
            Drag to explore
          </p>

        </Reveal>

        {/* =========================
            CATEGORY CAROUSEL
        ========================== */}

        <div
          className="
            embla
            cursor-grab
            active:cursor-grabbing
          "
          ref={emblaRef}
        >

          <div
            className="
              embla__container
              -ml-3
              md:-ml-4
            "
          >

            {categories.map((cat, i) => {

              const image =
                categoryImages[cat.name] || fallbackImage;

              return (
                <div
                  key={cat.name}
                  className="
                    embla__slide
                    min-w-0
                    pl-3
                    md:pl-4
                    flex-[0_0_72%]
                    xs:flex-[0_0_55%]
                    sm:flex-[0_0_38%]
                    md:flex-[0_0_25%]
                    lg:flex-[0_0_19%]
                    xl:flex-[0_0_16.66%]
                  "
                >

                  <Reveal delay={i * 0.05}>

                    <Link
                      href={`/products?category=${encodeURIComponent(
                        cat.name
                      )}`}
                      className="
                        group
                        block
                        relative
                      "
                    >

                      {/* =========================
                          IMAGE CARD
                      ========================== */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[28px]
                          bg-[#eadfd2]
                          aspect-[4/5]
                          shadow-[0_8px_30px_rgba(63,12,21,0.08)]
                          transition-all
                          duration-500
                          group-hover:-translate-y-2
                          group-hover:shadow-[0_18px_45px_rgba(63,12,21,0.16)]
                        "
                      >

                        {/* Image */}

                        <img
                          src={image}
                          alt={cat.name}
                          loading="lazy"
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                          "
                        />

                        {/* Soft image overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#3f0c15]/65
                            via-[#3f0c15]/5
                            to-transparent
                            opacity-80
                            transition-opacity
                            duration-500
                            group-hover:opacity-95
                          "
                        />

                        {/* Top shine */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white/20
                            via-transparent
                            to-transparent
                            opacity-60
                            pointer-events-none
                          "
                        />

                        {/* =========================
                            GOLD OVAL ACCENT
                        ========================== */}

                        <div
                          className="
                            absolute
                            inset-[10px]
                            rounded-[24px]
                            border
                            border-white/20
                            pointer-events-none
                            transition-all
                            duration-500
                            group-hover:border-gold-light/50
                          "
                        />

                        {/* =========================
                            CATEGORY NUMBER
                        ========================== */}

                        <span
                          className="
                            absolute
                            top-4
                            left-4
                            w-8
                            h-8
                            rounded-full
                            bg-white/10
                            backdrop-blur-md
                            border
                            border-white/20
                            flex
                            items-center
                            justify-center
                            text-[10px]
                            tracking-widest
                            text-white/80
                          "
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* =========================
                            BOTTOM CATEGORY INFO
                        ========================== */}

                        <div
                          className="
                            absolute
                            left-5
                            right-5
                            bottom-5
                          "
                        >

                          <div className="flex items-center gap-2 mb-2">

                            <span
                              className="
                                block
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
                                tracking-[0.2em]
                                text-gold-light
                              "
                            >
                              Collection
                            </span>

                          </div>

                          <h3
                            className="
                              font-display
                              text-xl
                              md:text-lg
                              lg:text-xl
                              text-white
                              leading-tight
                            "
                          >
                            {cat.name}
                          </h3>

                        </div>

                      </div>

                      {/* =========================
                          BOTTOM LABEL
                      ========================== */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          px-2
                          mt-4
                        "
                      >

                        <span
                          className="
                            text-sm
                            tracking-wide
                            text-ink
                            transition-colors
                            duration-300
                            group-hover:text-maroon
                          "
                        >
                          Explore Collection
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            justify-center
                            w-7
                            h-7
                            rounded-full
                            border
                            border-line
                            text-maroon
                            transition-all
                            duration-300
                            group-hover:bg-maroon
                            group-hover:text-white
                            group-hover:border-maroon
                          "
                        >
                          →
                        </span>

                      </div>

                    </Link>

                  </Reveal>

                </div>
              );
            })}

          </div>

        </div>

        {/* =========================
            BOTTOM HINT
        ========================== */}

        <div className="flex items-center justify-center mt-10">

          <div className="flex items-center gap-3 text-ink-soft/60">

            <span className="h-px w-8 bg-line" />

            <span className="text-[9px] uppercase tracking-[0.2em]">
              Swipe to discover
            </span>

            <span className="h-px w-8 bg-line" />

          </div>

        </div>

      </div>

    </section>
  );
}