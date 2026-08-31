"use client";

import Link from "next/link";
import { ArrowRight, Video, PhoneCall, HomeIcon, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WaysToShop() {
  return (
    <section className="section bg-blush/50 relative overflow-hidden">

      {/* Background Decoration */}

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

        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal className="text-center mb-12 md:mb-14">

          <span className="eyebrow">
            At Your Convenience
          </span>

          <h2
            className="
              font-display
              text-3xl
              md:text-[2.4rem]
              text-maroon-deep
              mt-3
            "
          >
            Shop However Suits You
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
            {/*describe */}
          </p>

          {/* <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-10 h-px bg-gold/30" />

            <Sparkles className="w-3.5 h-3.5 text-gold" />

            <span className="w-10 h-px bg-gold/30" />
          </div> */}

        </Reveal>


        {/* =====================================================
            CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


          {/* =====================================================
              1. VIDEO CONSULTATION
          ====================================================== */}

          <Reveal
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-[26px]
              min-h-[340px]
              shadow-[0_10px_35px_rgba(63,12,21,0.06)]
              transition-all
              duration-700
              hover:-translate-y-2
              hover:shadow-[0_22px_50px_rgba(63,12,21,0.13)]
            "
          >

            {/* Image */}

            <img
              src="/images/products/dewdrop-pendant-necklace.jpg"
              alt="Luxury jewellery virtual consultation"
              loading="lazy"
              className="
                absolute
                right-0
                top-0
                h-full
                w-full
                object-cover
                opacity-70
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-110
                sm:w-[46%]
                sm:opacity-100
              "
            />

            {/* Image fade */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white
                via-white/90
                via-[52%]
                to-transparent
                pointer-events-none
              "
            />

            {/* Image bottom fade */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-white/30
                to-transparent
                pointer-events-none
              "
            />

            {/* Animated shine */}

            <div
              className="
                absolute
                top-0
                -right-[100%]
                w-[45%]
                h-full
                bg-gradient-to-l
                from-transparent
                via-white/25
                to-transparent
                skew-x-[-15deg]
                transition-all
                duration-[1300ms]
                group-hover:right-[120%]
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                w-full
                p-6
                sm:w-[70%]
                sm:p-8
                md:p-9
              "
            >

              <span
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-gold/50
                  flex
                  items-center
                  justify-center
                  mb-5
                  bg-white/70
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:bg-gold
                  group-hover:border-gold
                "
              >
                <Video
                  className="
                    w-[18px]
                    h-[18px]
                    text-maroon
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                  strokeWidth={1.6}
                />
              </span>

              <span
                className="
                  text-[0.6rem]
                  uppercase
                  tracking-[0.25em]
                  text-gold
                "
              >
                Personal Styling
              </span>

              <h3
                className="
                  font-display
                  text-xl
                  md:text-2xl
                  text-ink
                  mt-2
                  leading-tight
                "
              >
                Expert Stylists
                <br />
                <span className="italic font-light">
                  on Video Call
                </span>
              </h3>

              <p
                className="
                  text-sm
                  text-ink-soft
                  mt-3
                  leading-relaxed
                  max-w-[17rem]
                "
              >
               
              </p>

              <Link
                href="/book-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  btn-primary
                  group/button
                "
              >
                Book Consultation

                <ArrowRight
                  className="
                    w-3.5
                    h-3.5
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                />
              </Link>

            </div>

          </Reveal>


          {/* =====================================================
              2. TALK TO AN EXPERT
          ====================================================== */}

          <Reveal
            delay={0.08}
            className="
              group
              relative
              overflow-hidden
              bg-[#3f0c15]
              rounded-[26px]
              min-h-[340px]
              shadow-[0_10px_35px_rgba(63,12,21,0.08)]
              transition-all
              duration-700
              hover:-translate-y-2
              hover:shadow-[0_22px_50px_rgba(63,12,21,0.18)]
            "
          >

            {/* Image */}

            <img
              src="/images/products/cascade-choker-necklace.jpg"
              alt="Luxury jewellery showroom"
              loading="lazy"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
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
                from-[#3f0c15]/95
                via-[#3f0c15]/70
                to-[#3f0c15]/15
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#3f0c15]/75
                via-transparent
                to-transparent
              "
            />

            {/* Shine */}

            <div
              className="
                absolute
                top-0
                -left-[100%]
                w-[55%]
                h-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                skew-x-[-15deg]
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
                p-8
                md:p-9
              "
            >

              <span
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-gold-light/50
                  flex
                  items-center
                  justify-center
                  mb-5
                  bg-black/10
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:bg-gold
                  group-hover:border-gold
                "
              >
                <PhoneCall
                  className="
                    w-[18px]
                    h-[18px]
                    text-gold-light
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                  strokeWidth={1.6}
                />
              </span>

              <span
                className="
                  text-[0.6rem]
                  uppercase
                  tracking-[0.25em]
                  text-gold-light
                "
              >
                Personal Guidance
              </span>

              <h3
                className="
                  font-display
                  text-xl
                  md:text-2xl
                  text-cream
                  mt-2
                  leading-tight
                "
              >
                1-on-1
                <br />
                <span className="italic font-light">
                  Consultant
                </span>
              </h3>

              <p
                className="
                  text-sm
                  text-cream/65
                  mt-3
                  leading-relaxed
                  max-w-[17rem]
                "
              >
               
              </p>

              <Link
                href="/book-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  border
                  border-gold-light/60
                  text-cream
                  px-5
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  transition-all
                  duration-300
                  hover:bg-gold
                  hover:border-gold
                  hover:text-maroon-deep
                "
              >
                Talk to an Expert

                <ArrowRight
                  className="
                    w-3.5
                    h-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

            </div>

          </Reveal>


          {/* =====================================================
              3. TRY AT HOME
          ====================================================== */}
{/* 
          <Reveal
            delay={0.16}
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-[26px]
              min-h-[330px]
              sm:col-span-2
              shadow-[0_10px_35px_rgba(63,12,21,0.06)]
              transition-all
              duration-700
              hover:-translate-y-2
              hover:shadow-[0_22px_50px_rgba(63,12,21,0.13)]
            "
          >


            <img
              src="/images/products/featherline-tennis-bracelet.jpg"
              alt="Woman wearing elegant jewellery at home"
              loading="lazy"
              className="
                absolute
                right-0
                top-0
                h-full
                w-full
                md:w-[48%]
                object-cover
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-110
              "
            />

     

            <div
              className="
                absolute
                inset-0
                hidden
                md:block
                bg-gradient-to-r
                from-white
                via-white/90
                via-[48%]
                to-transparent
              "
            />

           

            <div
              className="
                absolute
                inset-0
                md:hidden
                bg-gradient-to-t
                from-[#3f0c15]/90
                via-[#3f0c15]/35
                to-transparent
              "
            />

            

            <div
              className="
                absolute
                top-0
                -right-[100%]
                w-[45%]
                h-full
                bg-gradient-to-l
                from-transparent
                via-white/20
                to-transparent
                skew-x-[-15deg]
                transition-all
                duration-[1300ms]
                group-hover:right-[120%]
              "
            />

            

            <div
              className="
                relative
                z-10
                p-8
                md:p-10
                md:w-[58%]
              "
            >

              <span
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-gold/50
                  flex
                  items-center
                  justify-center
                  mb-5
                  bg-white/70
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:bg-gold
                  group-hover:border-gold
                "
              >
                <HomeIcon
                  className="
                    w-[18px]
                    h-[18px]
                    text-maroon
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                  strokeWidth={1.6}
                />
              </span>

              <span
                className="
                  text-[0.6rem]
                  uppercase
                  tracking-[0.25em]
                  text-gold
                "
              >
                Luxury at Home
              </span>

              <h3
                className="
                  font-display
                  text-2xl
                  md:text-[2.1rem]
                  text-ink
                  mt-2
                  leading-tight
                "
              >
                Try At Home
              </h3>

              <p
                className="
                  text-sm
                  text-ink-soft
                  mt-3
                  leading-relaxed
                  max-w-md
                "
              >
                Experience your favourite jewellery at home
                with a personalised try-on session designed
                entirely around your convenience.
              </p>

              <Link
                href="/book-us"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  btn-primary
                  group/button
                "
              >
                Schedule a Home Try-On

                <ArrowRight
                  className="
                    w-3.5
                    h-3.5
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                />
              </Link>

            </div>

          </Reveal> */}

        </div>

      </div>
    </section>
  );
}