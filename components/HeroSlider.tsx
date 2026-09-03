"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const slides = [
  {
    desktop: "/images/sliders/desktop.jpeg",
    mobile: "/images/sliders/Mobile.png",

    desktopAlt: "Luxury diamond jewellery collection",
    mobileAlt: "Luxury diamond jewellery",
  },
  // {
  //   desktop: "/images/products/cascade-choker-necklace.jpg",
  //   mobile: "/images/products/cascade-choker-necklace.jpg",

  //   desktopAlt: "Elegant gold and diamond jewellery",
  //   mobileAlt: "Elegant diamond ring",
  // },

  // {
  //   desktop: "/images/products/featherline-tennis-bracelet.jpg",
  //   mobile: "/images/products/featherline-tennis-bracelet.jpg",

  //   desktopAlt: "Premium jewellery collection",
  //   mobileAlt: "Diamond jewellery close up",
  // },
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
    <section className="relative w-full overflow-hidden bg-[#f4eee5]">

      {/* =====================================================
          SLIDER
      ====================================================== */}

      <div ref={emblaRef} className="relative overflow-hidden">
        <div className="flex">

          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%]"
            >

              {/* =================================================
                  SAME CONTAINER / SPACING AS YOUR ORIGINAL
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  max-w-[1700px]
                  px-0
                  py-0
                  sm:px-6
                  lg:px-10
                  lg:py-7
                "
              >

                {/* =================================================
                    SAME ROUNDED CARD
                ================================================= */}

                <div
                  className="
                    relative
                    aspect-[9/16]
                    mx-[5px]
                    w-[calc(100%_-_10px)]
                    overflow-hidden
                    rounded-[22px]
                    bg-[#ded1bd]
                    shadow-[0_30px_90px_rgba(57,39,25,0.16)]
                    sm:mx-0
                    sm:w-full
                    sm:aspect-[18/9]
                    sm:rounded-[28px]
                    lg:aspect-[22/10]
                  "
                >

                  {/* =================================================
                      RESPONSIVE IMAGE
                  ================================================= */}

                  <motion.div
                    key={`image-${index}-${selected}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full"
                  >

                    <picture className="absolute inset-0 block h-full w-full">
                      <source
                        media="(max-width: 639px)"
                        srcSet={slide.mobile}
                      />
                      <img
                        src={slide.desktop}
                        alt={slide.desktopAlt}
                        className="block h-full w-full object-cover object-center"
                      />
                    </picture>

                  </motion.div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* =====================================================
          SLIDE INDICATORS
      ====================================================== */}

      <div
        className="
          absolute
          bottom-10
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >

        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
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
                  selected === index
                    ? "w-10 bg-white"
                    : "w-3 bg-white/50"
                }
              `}
            />
          </button>
        ))}

      </div>

    </section>
  );
}