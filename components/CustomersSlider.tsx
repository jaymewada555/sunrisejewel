"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { SunburstRays } from "@/components/JewelIcons";
import Reveal from "@/components/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CustomersSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ]);
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
    <section className="section relative overflow-hidden bg-maroon-deep  mb-[20px]">
      <SunburstRays className="sunburst-mark w-[500px] h-[500px] text-gold-light left-1/2 -translate-x-1/2 -top-48 animate-slow-spin" />

      <div className="container-lg relative">
        <Reveal className="text-center ">
          <span className="eyebrow text-gold-light">Real Stories</span>
          <h2 className="font-display text-3xl md:text-[2.4rem] text-cream mt-3 mb-5">
            Hear From Them
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((t, i) => (
                <div key={t.name} className="embla__slide min-w-0 flex-[0_0_100%] px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={selected === i ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.96 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center text-center px-4 md:px-14"
                  >
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold ring-4 ring-cream/10">
                      <span className="font-display text-xl text-maroon-deep">
                        {initials(t.name)}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <Quote className="mt-4 h-6 w-6 text-gold/60" strokeWidth={1.4} />
                    <p className="mt-4 max-w-xl font-display text-lg leading-relaxed text-cream/90 italic md:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <span className="mt-6 text-sm tracking-wide text-gold-light">
                      {t.name}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/25 text-cream/70 hover:text-cream hover:border-cream/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.6} />
            </button>
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selected === i ? "w-7 bg-gold" : "w-1.5 bg-cream/25"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/25 text-cream/70 hover:text-cream hover:border-cream/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
