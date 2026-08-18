"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Gem,
  Heart,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    eyebrow: "THE NEW JEWELLERY EDIT",
    smallText: "A celebration of timeless brilliance",

    title: "Made to be",
    titleItalic: "remembered.",

    description:
      "Discover jewellery designed for the moments that become your most beautiful memories.",

    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=95",

    imageAlt: "Woman wearing an elegant diamond necklace",

    cta: "Explore Collection",
    href: "/products",

    tag: "NEW COLLECTION",

    stats: [
      {
        icon: Gem,
        title: "Diamond Quality",
        text: "Exceptional brilliance",
      },
      {
        icon: ShieldCheck,
        title: "Lifetime Care",
        text: "Made for generations",
      },
    ],
  },

  {
    eyebrow: "THE BRIDAL COLLECTION",
    smallText: "For your once-in-a-lifetime moment",

    title: "Every love story",
    titleItalic: "deserves diamonds.",

    description:
      "From the first yes to forever after, discover bridal jewellery crafted to become part of your story.",

    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=95",

    imageAlt: "Luxury diamond ring",

    cta: "Discover Bridal",
    href: "/products?occasion=Bridal",

    tag: "BRIDAL EDIT",

    stats: [
      {
        icon: Gem,
        title: "Rare Craftsmanship",
        text: "Hand-finished details",
      },
      {
        icon: Heart,
        title: "Made With Love",
        text: "Designed for forever",
      },
    ],
  },

  {
    eyebrow: "THE DIAMOND EDIT",
    smallText: "Light that stays with you",

    title: "Let your",
    titleItalic: "brilliance shine.",

    description:
      "Elegant earrings, necklaces, bracelets and rings created to make every day feel extraordinary.",

    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1800&q=95",

    imageAlt: "Elegant diamond jewellery",

    cta: "Shop Diamonds",
    href: "/products?category=Diamonds",

    tag: "DIAMOND EDIT",

    stats: [
      {
        icon: Sparkles,
        title: "Pure Brilliance",
        text: "Exceptional sparkle",
      },
      {
        icon: CalendarDays,
        title: "Every Occasion",
        text: "Made for your moments",
      },
    ],
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 35,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4eee5] text-[#241b17]">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -left-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#d5b17a]/20
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-[-180px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#c7a36b]/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#b18a52]/50
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          SLIDER
      ====================================================== */}

      <div ref={emblaRef} className="relative z-10 overflow-hidden">

        <div className="flex">

          {slides.map((slide, index) => (

            <div
              key={slide.title}
              className="min-w-0 flex-[0_0_100%]"
            >

              <div
                className="
                  relative
                  mx-auto
                  min-h-[650px]
                  max-w-[1700px]
                  px-4
                  py-5
                  sm:px-6
                  lg:px-10
                  lg:py-7
                "
              >

                {/* =================================================
                    MAIN CAMPAIGN CARD
                ================================================== */}

                <div
                  className="
                    relative
                    min-h-[620px]
                    overflow-hidden
                    rounded-[28px]
                    bg-[#ded1bd]
                    shadow-[0_30px_90px_rgba(57,39,25,0.16)]
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <motion.div
                    key={`image-${index}-${selected}`}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={
                      selected === index
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 1.1,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      lg:left-[30%]
                    "
                  >

                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                      "
                    />

                  </motion.div>

                  {/* =================================================
                      IMAGE DARK / CREAM GRADIENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#30231c]
                      via-[#30231c]/75
                      via-[45%]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-black/5
                    "
                  />

                  {/* =================================================
                      GOLD LIGHT
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[18%]
                      top-[-180px]
                      h-[500px]
                      w-[500px]
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[20%]
                      top-[-120px]
                      h-[380px]
                      w-[380px]
                      rounded-full
                      border
                      border-white/10
                    "
                  />

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-20
                      flex
                      min-h-[620px]
                      items-center
                      px-7
                      py-16
                      sm:px-12
                      lg:w-[55%]
                      lg:px-20
                      xl:px-24
                    "
                  >

                    <div className="max-w-[650px]">

                      {/* BRAND / EYEBROW */}

                      <motion.div
                        key={`eyebrow-${index}-${selected}`}
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={
                          selected === index
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.6,
                        }}
                        className="mb-7 flex items-center gap-4"
                      >

                        <span className="h-px w-10 bg-[#d9b36f]" />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            tracking-[0.32em]
                            text-[#e7c98e]
                            sm:text-xs
                          "
                        >
                          {slide.eyebrow}
                        </span>

                      </motion.div>

                      {/* SMALL TEXT */}

                      <motion.p
                        key={`small-${index}-${selected}`}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={
                          selected === index
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.6,
                          delay: 0.05,
                        }}
                        className="
                          mb-4
                          text-sm
                          font-light
                          tracking-wide
                          text-white/70
                          sm:text-base
                        "
                      >
                        {slide.smallText}
                      </motion.p>

                      {/* =================================================
                          TITLE
                      ================================================== */}

                      <motion.h1
                        key={`title-${index}-${selected}`}
                        initial={{
                          opacity: 0,
                          y: 35,
                        }}
                        animate={
                          selected === index
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.75,
                          delay: 0.1,
                        }}
                        className="
                          font-serif
                          text-[3.4rem]
                          font-light
                          leading-[0.98]
                          tracking-[-0.035em]
                          text-white
                          sm:text-[4.5rem]
                          lg:text-[5.5rem]
                          xl:text-[6.3rem]
                        "
                      >
                        {slide.title}

                        <br />

                        <span
                          className="
                            font-serif
                            font-normal
                            italic
                            text-[#e5c180]
                          "
                        >
                          {slide.titleItalic}
                        </span>
                      </motion.h1>

                      {/* =================================================
                          DESCRIPTION
                      ================================================== */}

                      <motion.p
                        key={`description-${index}-${selected}`}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={
                          selected === index
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.7,
                          delay: 0.2,
                        }}
                        className="
                          mt-7
                          max-w-[500px]
                          text-sm
                          leading-7
                          text-white/75
                          sm:text-base
                        "
                      >
                        {slide.description}
                      </motion.p>

                      {/* =================================================
                          CTA
                      ================================================== */}

                      <motion.div
                        key={`buttons-${index}-${selected}`}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={
                          selected === index
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.7,
                          delay: 0.3,
                        }}
                        className="
                          mt-8
                          flex
                          flex-col
                          gap-3
                          sm:flex-row
                        "
                      >

                        <Link
                          href={slide.href}
                          className="
                            group
                            inline-flex
                            h-12
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-[#d8b26d]
                            px-7
                            text-xs
                            font-semibold
                            tracking-[0.16em]
                            text-[#2b2019]
                            transition-all
                            duration-300
                            hover:bg-[#f0d39a]
                            hover:shadow-[0_10px_35px_rgba(216,178,109,0.25)]
                          "
                        >
                          {slide.cta}

                          <ArrowRight
                            className="
                              h-4
                              w-4
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </Link>

                        <Link
                          href="/book-us"
                          className="
                            inline-flex
                            h-12
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/30
                            bg-white/5
                            px-7
                            text-xs
                            font-semibold
                            tracking-[0.16em]
                            text-white
                            backdrop-blur-sm
                            transition-all
                            duration-300
                            hover:border-white/60
                            hover:bg-white/10
                          "
                        >
                          Book Appointment
                        </Link>

                      </motion.div>

                    </div>

                  </div>

                  {/* =================================================
                      FLOATING INFORMATION CARDS
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-7
                      right-7
                      z-30
                      hidden
                      w-[380px]
                      gap-3
                      sm:flex
                    "
                  >

                    {slide.stats.map((stat, statIndex) => {

                      const Icon = stat.icon;

                      return (
                        <motion.div
                          key={stat.title}
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={
                            selected === index
                              ? {
                                  opacity: 1,
                                  y: 0,
                                }
                              : {}
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + statIndex * 0.1,
                          }}
                          className="
                            flex
                            flex-1
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-white/15
                            bg-black/25
                            px-4
                            py-3
                            backdrop-blur-md
                          "
                        >

                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#d8b26d]/50
                              bg-[#d8b26d]/10
                            "
                          >
                            <Icon
                              className="h-4 w-4 text-[#e1bf7e]"
                              strokeWidth={1.5}
                            />
                          </div>

                          <div>

                            <p
                              className="
                                text-[10px]
                                font-semibold
                                tracking-wide
                                text-white
                              "
                            >
                              {stat.title}
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-[9px]
                                text-white/55
                              "
                            >
                              {stat.text}
                            </p>

                          </div>

                        </motion.div>
                      );
                    })}

                  </div>

                  {/* =================================================
                      CAMPAIGN TAG
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      z-30
                      hidden
                      rounded-full
                      border
                      border-white/20
                      bg-black/20
                      px-5
                      py-2.5
                      backdrop-blur-md
                      sm:block
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.25em]
                        text-white/80
                      "
                    >
                      {slide.tag}
                    </span>
                  </div>

                  {/* =================================================
                      SLIDE NUMBER
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-8
                      left-7
                      z-30
                      hidden
                      items-center
                      gap-3
                      sm:flex
                    "
                  >

                    <span
                      className="
                        font-serif
                        text-2xl
                        font-light
                        text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-12 bg-white/30" />

                    <span
                      className="
                        text-[9px]
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      03
                    </span>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          flex
          max-w-[1700px]
          items-center
          justify-between
          px-7
          pb-6
          sm:px-10
          lg:px-16
        "
      >

        {/* LEFT LABEL */}

        <div className="hidden items-center gap-3 sm:flex">

          <Sparkles
            className="h-4 w-4 text-[#b18a52]"
            strokeWidth={1.5}
          />

          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.25em]
              text-[#7e6954]
            "
          >
            FINE JEWELLERY • EST. 2026
          </span>

        </div>

        {/* CONTROLS */}

        <div className="ml-auto flex items-center gap-5">

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi?.scrollPrev()}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#bca887]/50
              text-[#5b4938]
              transition-all
              duration-300
              hover:border-[#8d6b3d]
              hover:bg-white
            "
          >
            <ChevronLeft
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </button>

          {/* PROGRESS */}

          <div className="flex items-center gap-2">

            {slides.map((_, i) => (

              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className="group p-1"
              >
                <span
                  className={`
                    block
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      selected === i
                        ? "w-10 bg-[#a37b40]"
                        : "w-3 bg-[#bca887]"
                    }
                  `}
                />
              </button>

            ))}

          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi?.scrollNext()}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#bca887]/50
              text-[#5b4938]
              transition-all
              duration-300
              hover:border-[#8d6b3d]
              hover:bg-white
            "
          >
            <ChevronRight
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </button>

        </div>

      </div>

      {/* =====================================================
          MOBILE INFO STRIP
      ====================================================== */}

      <div
        className="
          flex
          border-t
          border-[#c6b18f]/30
          bg-[#eee5d8]
          sm:hidden
        "
      >

        <div className="flex flex-1 items-center justify-center gap-2 px-3 py-4">

          <Gem
            className="h-4 w-4 text-[#a17b43]"
            strokeWidth={1.5}
          />

          <span
            className="
              text-[8px]
              font-semibold
              tracking-[0.12em]
              text-[#5f4b38]
            "
          >
            CERTIFIED DIAMONDS
          </span>

        </div>

        <div className="w-px bg-[#c6b18f]/40" />

        <div className="flex flex-1 items-center justify-center gap-2 px-3 py-4">

          <ShieldCheck
            className="h-4 w-4 text-[#a17b43]"
            strokeWidth={1.5}
          />

          <span
            className="
              text-[8px]
              font-semibold
              tracking-[0.12em]
              text-[#5f4b38]
            "
          >
            LIFETIME CARE
          </span>

        </div>

      </div>

    </section>
  );
}