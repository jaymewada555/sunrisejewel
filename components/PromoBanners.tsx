import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PromoBanners() {
  return (
    <section className="section relative overflow-hidden">

      {/* Background Decoration */}

      <div
        className="
          absolute
          -top-32
          -right-32
          w-[380px]
          h-[380px]
          rounded-full
          bg-gold/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -left-32
          w-[380px]
          h-[380px]
          rounded-full
          bg-maroon/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="container-lg relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* =====================================================
              LEFT LARGE BANNER
          ====================================================== */}

          <Reveal>

            <Link
              href="/products?category=Necklaces"
              className="
                group
                relative
                block
                overflow-hidden
                min-h-[430px]
                md:min-h-[520px]
                rounded-[24px]
                bg-[#3f0c15]
              "
            >

              {/* Image */}

              <img
                src="/images/products/cascade-choker-necklace.jpg"
                alt="Luxury Indian jewellery"
                loading="lazy"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[1600ms]
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Main dark gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#3f0c15]/95
                  via-[#3f0c15]/60
                  to-transparent
                "
              />

              {/* Bottom gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3f0c15]/90
                  via-transparent
                  to-transparent
                "
              />

              {/* Animated shine */}

              <div
                className="
                  absolute
                  -left-[120%]
                  top-0
                  w-[60%]
                  h-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  skew-x-[-20deg]
                  transition-all
                  duration-[1400ms]
                  group-hover:left-[140%]
                "
              />

              {/* Content */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-7
                  md:p-10
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-5
                  "
                >
                  <Sparkles
                    className="
                      w-4
                      h-4
                      text-gold-light
                      transition-transform
                      duration-500
                      group-hover:rotate-45
                    "
                  />

                  <span
                    className="
                      text-[0.62rem]
                      uppercase
                      tracking-[0.25em]
                      text-gold-light
                    "
                  >
                    Diamond Mangalsutras
                  </span>
                </div>

                <span
                  className="
                    block
                    w-10
                    h-px
                    bg-gold
                    mb-5
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                <h3
                  className="
                    font-display
                    text-cream
                    text-3xl
                    md:text-[2.6rem]
                    leading-[1.08]
                    max-w-sm
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  Blessings in
                  <br />
                  <span className="italic font-light">
                    Brilliance
                  </span>
                </h3>

                <p
                  className="
                    text-cream/65
                    text-sm
                    mt-4
                    max-w-sm
                    leading-relaxed
                  "
                >
                  Handcrafted mangalsutras that carry
                  tradition into every detail.
                </p>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-cream
                    text-xs
                    tracking-[0.16em]
                    uppercase
                    border-b
                    border-gold-light
                    pb-2
                    transition-all
                    duration-300
                    group-hover:gap-4
                  "
                >
                  Shop the Edit

                  <ArrowRight
                    className="
                      w-3.5
                      h-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

              </div>

            </Link>

          </Reveal>


          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <div className="grid grid-rows-2 gap-6">

            {/* =====================================================
                TOP RIGHT - PENDANTS
            ====================================================== */}

            <Reveal delay={0.08}>

              <Link
                href="/products?category=Necklaces"
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  min-h-[220px]
                  rounded-[24px]
                  bg-[#eee4da]
                "
              >

                {/* Image */}

                <img
                  src="/images/products/dewdrop-pendant-necklace.jpg"
                  alt="Elegant diamond pendant"
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Soft cream overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#f5eee7]/95
                    via-[#f5eee7]/65
                    to-transparent
                  "
                />

                {/* Bottom shadow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#f5eee7]/50
                    to-transparent
                  "
                />

                {/* Shine */}

                <div
                  className="
                    absolute
                    -left-[100%]
                    top-0
                    w-[55%]
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    skew-x-[-20deg]
                    transition-all
                    duration-[1300ms]
                    group-hover:left-[130%]
                  "
                />

                {/* Content */}

                <div
                  className="
                    relative
                    z-10
                    h-full
                    flex
                    flex-col
                    justify-center
                    p-7
                    md:p-9
                  "
                >

                  <span
                    className="
                      text-[0.6rem]
                      uppercase
                      tracking-[0.25em]
                      text-maroon/60
                    "
                  >
                    Everyday Diamonds
                  </span>

                  <h3
                    className="
                      font-display
                      text-maroon-deep
                      text-2xl
                      md:text-[2rem]
                      leading-tight
                      max-w-[16rem]
                      mt-2
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    Elevate Your
                    <br />
                    <span className="italic font-light">
                      Daily Look
                    </span>
                  </h3>

                  <p
                    className="
                      text-ink-soft
                      text-xs
                      mt-3
                      max-w-[16rem]
                    "
                  >
                    Diamond pendants for effortless
                    everyday wear.
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-5
                      text-maroon
                      text-xs
                      tracking-[0.15em]
                      uppercase
                      w-fit
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    Explore

                    <ArrowRight
                      className="
                        w-3.5
                        h-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </div>

              </Link>

            </Reveal>


            {/* =====================================================
                BOTTOM RIGHT - MEN
            ====================================================== */}

            <Reveal delay={0.16}>

              <Link
                href="/products?occasion=Statement"
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  min-h-[220px]
                  rounded-[24px]
                  bg-[#241217]
                "
              >

                {/* Image */}

                <img
                  src="/images/products/meridian-halo-ring.jpg"
                  alt="Luxury men's jewellery"
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#241217]/95
                    via-[#241217]/65
                    to-[#241217]/15
                  "
                />

                {/* Bottom gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#241217]/85
                    via-transparent
                    to-transparent
                  "
                />

                {/* Animated shine */}

                <div
                  className="
                    absolute
                    -left-[100%]
                    top-0
                    w-[55%]
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    skew-x-[-20deg]
                    transition-all
                    duration-[1300ms]
                    group-hover:left-[130%]
                  "
                />

                {/* Content */}

                <div
                  className="
                    relative
                    z-10
                    h-full
                    flex
                    flex-col
                    justify-center
                    p-7
                    md:p-9
                  "
                >

                  <span
                    className="
                      text-[0.6rem]
                      uppercase
                      tracking-[0.25em]
                      text-gold-light
                    "
                  >
                    Men's Collection
                  </span>

                  <h3
                    className="
                      font-display
                      text-cream
                      text-2xl
                      md:text-[2rem]
                      leading-tight
                      max-w-[17rem]
                      mt-2
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    Gold, Diamonds
                    <br />
                    <span className="italic font-light">
                      &amp; Perfection
                    </span>
                  </h3>

                  <p
                    className="
                      text-cream/60
                      text-xs
                      mt-3
                      max-w-[17rem]
                    "
                  >
                    Refined men's diamond jewellery,
                    understated and distinctive.
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-5
                      text-cream
                      text-xs
                      tracking-[0.15em]
                      uppercase
                      w-fit
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    Explore Now

                    <ArrowRight
                      className="
                        w-3.5
                        h-3.5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </div>

              </Link>

            </Reveal>

          </div>

        </div>

      </div>

    </section>
  );
}