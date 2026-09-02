"use client";

import {
  BadgeCheck,
  Gem,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const assurances = [
  {
    icon: Gem,
    title: "Certified",
    description: "Authentic diamonds & jewellery",
  },
  {
    icon: BadgeCheck,
    title: "Purity Assured",
    description: "Quality you can trust",
  },
  {
    icon: RefreshCcw,
    title: "100% Exchange",
    description: "Simple & transparent exchange",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Care",
    description: "Dedicated care for your jewellery",
  },
];

const certificates = [
  {
    src: "/images/certificates/sgl.png",
    title: "SGL Certified",
    description: "Trusted gemological certification for diamond authenticity and quality.",
  },
  {
    src: "/images/certificates/igi.png",
    title: "IGI Certified",
    description: "International grading assurance for precision, cut and brilliance.",
  },
];

export default function SunriseAssurance() {
  return (
    <section className="relative bg-[#faf8f4] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">

      {/* Outer Decorative Frame */}
      <div className="mx-auto max-w-7xl">

        <div className="relative rounded-[30px] border border-[#d9c8ad] bg-white px-6 py-10 shadow-[0_10px_40px_rgba(91,67,38,0.05)] sm:px-10 lg:px-16 lg:py-12">

          {/* Inner Frame */}
          <div className="pointer-events-none absolute inset-[7px] rounded-[24px] border border-[#eadfce]" />

          {/* Top Decorative Corners */}
          <div className="pointer-events-none absolute -left-[1px] top-8 h-10 w-10 rounded-r-[20px] border-b border-r border-[#d9c8ad] bg-white" />

          <div className="pointer-events-none absolute -right-[1px] top-8 h-10 w-10 rounded-l-[20px] border-b border-l border-[#d9c8ad] bg-white" />

          {/* Bottom Decorative Corners */}
          <div className="pointer-events-none absolute -bottom-[1px] left-8 h-10 w-10 rounded-tr-[20px] border-r border-t border-[#d9c8ad] bg-white" />

          <div className="pointer-events-none absolute -bottom-[1px] right-8 h-10 w-10 rounded-tl-[20px] border-l border-t border-[#d9c8ad] bg-white" />

          {/* =====================================================
              HEADING
          ====================================================== */}

          <div className="relative z-10 text-center">

            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#b18a52] sm:text-[10px]">
              The Sunrise Promise
            </p>

            <h2
              className="
                font-serif
                text-3xl
                font-medium
                tracking-tight
                text-[#3b2920]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              The Sunrise Assurance
            </h2>

            <p
              className="
                mt-2
                font-serif
                text-base
                italic
                text-[#806d5c]
                sm:text-lg
              "
            >
              Crafted with care, cherished for a lifetime.
            </p>

            {/* Decorative Line */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#d6bd91]" />

              <span className="h-1.5 w-1.5 rotate-45 bg-[#b18a52]" />

              <span className="h-px w-10 bg-[#d6bd91]" />

            </div>

          </div>

          {/* =====================================================
              ASSURANCE ITEMS
          ====================================================== */}

          <div
            className="
              relative
              z-10
              mt-10
              grid
              grid-cols-2
              gap-y-10
              sm:grid-cols-4
              sm:gap-0
              lg:mt-12
            "
          >

            {assurances.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    px-4
                    text-center
                  "
                >

                  {/* Divider */}
                  {index !== 0 && (
                    <div
                      className="
                        absolute
                        left-0
                        top-3
                        hidden
                        h-24
                        w-px
                        bg-[#eadfce]
                        sm:block
                      "
                    />
                  )}

                  {/* Icon Circle */}

                  <div
                    className="
                      relative
                      flex
                      h-[70px]
                      w-[70px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d9c19a]
                      bg-[#fbf7ef]
                      transition-all
                      duration-500
                      group-hover:border-[#b18a52]
                      group-hover:bg-[#f7eddd]
                    "
                  >

                    {/* Inner Circle */}

                    <div
                      className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border
                        border-[#eadfce]
                      "
                    />

                    <Icon
                      className="
                        relative
                        z-10
                        h-7
                        w-7
                        text-[#b18a52]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                      strokeWidth={1.3}
                    />

                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-lg
                      font-medium
                      text-[#3b2920]
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-1.5
                      max-w-[180px]
                      text-[11px]
                      leading-5
                      text-[#8a7968]
                      sm:text-xs
                    "
                  >
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* =====================================================
              BOTTOM GOLD LINE
          ====================================================== */}

          <div className="relative z-10 mt-10 flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-[#eadfce]" />

            <span className="font-serif text-xs italic text-[#b18a52]">
              * T & C Apply.
            </span>

            <span className="h-px w-16 bg-[#eadfce]" />

          </div>

        </div>

        {/* Certificates */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <div
                key={certificate.title}
                className="group rounded-[24px] border border-[#e7d8be] bg-[#f9f5f0] p-5 shadow-[0_12px_28px_rgba(72,52,29,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(72,52,29,0.08)]"
              >
                <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border border-[#d9c8ad] bg-white shadow-inner shadow-[#f2e8d7] sm:h-[130px] sm:w-[130px]">
                    <img
                      src={certificate.src}
                      alt={certificate.title}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b18a52]">
                      Certified partner
                    </p>
                    <h3 className="font-serif text-2xl font-medium text-[#2f241f]">
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6d5b4f]">
                      {certificate.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}