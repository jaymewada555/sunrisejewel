import { Suspense } from "react";
import ProductsExplorer from "@/components/ProductsExplorer";
import { SunburstRays } from "@/components/JewelIcons";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Products | Sunrise Diamond & Jewels",
  description:
    "Browse Sunrise Diamond & Jewels' certified diamond jewellery by category, metal and occasion. Enquire instantly over WhatsApp.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-deep">
        <SunburstRays className="sunburst-mark w-[420px] h-[420px] text-gold-light -right-24 -top-24 animate-slow-spin" />
        <Reveal className="container-lg relative py-16 md:py-20 text-center">
          <span className="eyebrow text-gold-light">The Collection</span>
          <h1 className="font-display text-cream text-3xl md:text-5xl mt-3">
            Explore Our Jewellery
          </h1>
          <p className="text-cream/65 max-w-lg mx-auto mt-4 text-sm leading-relaxed">
            Filter by category, metal or occasion, then message us directly on
            WhatsApp for pricing, availability and a personal consultation.
          </p>
        </Reveal>
      </section>

      <Suspense fallback={null}>
        <ProductsExplorer />
      </Suspense>
    </>
  );
}
