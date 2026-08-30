import { Suspense } from "react";
import ProductsExplorer from "@/components/ProductsExplorer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Products | Sunrise Diamond & Jewels",
  description:
    "Browse Sunrise Diamond & Jewels' certified diamond jewellery by category and metal. Enquire instantly over WhatsApp.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="catalog-hero">
        <div className="container-lg">
          <Reveal className="catalog-hero-inner">
            <span className="eyebrow text-maroon-soft">Our Collection</span>
            <h1 className="font-display text-5xl md:text-[4rem] text-ink mt-4">Products</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-ink-soft leading-relaxed">
              Every piece is handcrafted with lab-grown and natural diamonds, designed to feel personal,
              premium, and effortless to wear.
            </p>
          </Reveal>
        </div>
      </section>

      <Suspense fallback={null}>
        <ProductsExplorer />
      </Suspense>
    </>
  );
}
