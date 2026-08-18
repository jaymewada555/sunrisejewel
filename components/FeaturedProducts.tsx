"use client";

import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { products } from "@/lib/data";
import Reveal from "@/components/Reveal";

function getProductImage(name: string, category: string) {
  const text = `${name} ${category}`.toLowerCase();

  // Aurora Solitaire Ring
  if (text.includes("aurora") || text.includes("solitaire")) {
    return {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} solitaire ring`,
    };
  }

  // Meridian Halo Ring
  if (text.includes("meridian") || text.includes("halo")) {
    return {
      src: "https://images.unsplash.com/photo-1530901729437-5372782e53f2?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} halo ring`,
    };
  }

  // Featherline Tennis Bracelet
  if (
    text.includes("featherline") ||
    text.includes("tennis bracelet") ||
    text.includes("tennis")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} tennis bracelet`,
    };
  }

  // Kada Heritage Bracelet
  if (
    text.includes("kada") ||
    text.includes("heritage") ||
    text.includes("bangle")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} kada bracelet`,
    };
  }

  // Emerald jewellery
  if (
    text.includes("emerald") ||
    text.includes("green")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} emerald jewellery`,
    };
  }

  // Engagement ring
  if (
    text.includes("engagement") ||
    text.includes("proposal")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} engagement ring`,
    };
  }

  // Gold jewellery
  if (
    text.includes("gold") ||
    text.includes("18k") ||
    text.includes("22k")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1713950920412-97799efdf870?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} gold jewellery`,
    };
  }

  // Necklace / Pendant
  if (
    text.includes("necklace") ||
    text.includes("pendant") ||
    text.includes("chain")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} necklace`,
    };
  }

  // Earrings
  if (
    text.includes("earring") ||
    text.includes("stud") ||
    text.includes("hoop")
  ) {
    return {
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} earrings`,
    };
  }

  // Generic ring
  if (text.includes("ring")) {
    return {
      src: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1000&q=90",
      alt: `${name} ring`,
    };
  }

  // Generic jewellery
  return {
    src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=90",
    alt: `${name} fine jewellery`,
  };
}

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="section bg-blush/50 relative overflow-hidden">

      {/* Background decoration */}

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

        <Reveal
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-12
            md:mb-14
          "
        >

          <div>

            <span className="eyebrow">
              Handpicked
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
              Our Best Sellers
            </h2>

            <p
              className="
                text-sm
                text-ink-soft
                mt-3
                max-w-md
                leading-relaxed
              "
            >
              Discover the pieces our customers love most —
              timeless jewellery designed to be treasured.
            </p>

          </div>

          <Link
            href="/products"
            className="btn-outline w-fit group"
          >
            View All

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

        </Reveal>


        {/* =====================================================
            PRODUCTS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-7
          "
        >

          {featured.map((p, i) => {

            const productImage = getProductImage(
              p.name,
              p.category
            );

            return (
              <Reveal
                key={p.id}
                delay={i * 0.08}
              >

                <Link
                  href={`/products?category=${encodeURIComponent(
                    p.category
                  )}`}
                  className="group block"
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[24px]
                      aspect-[4/5]
                      bg-[#eee7df]
                      shadow-[0_8px_30px_rgba(63,12,21,0.07)]
                      transition-all
                      duration-700
                      group-hover:-translate-y-2
                      group-hover:shadow-[0_20px_45px_rgba(63,12,21,0.15)]
                    "
                  >

                    <img
                      src={productImage.src}
                      alt={productImage.alt}
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

                    {/* Bottom gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#3f0c15]/65
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Soft light */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-white/15
                        via-transparent
                        to-transparent
                        opacity-60
                      "
                    />

                    {/* Shine animation */}

                    <div
                      className="
                        absolute
                        top-0
                        -left-[100%]
                        w-[60%]
                        h-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        skew-x-[-18deg]
                        transition-all
                        duration-[1300ms]
                        group-hover:left-[130%]
                      "
                    />

                    {/* Product number */}

                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        w-8
                        h-8
                        rounded-full
                        bg-black/10
                        backdrop-blur-md
                        border
                        border-white/25
                        flex
                        items-center
                        justify-center
                        text-white/80
                        text-[9px]
                        tracking-widest
                      "
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Wishlist */}

                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        w-9
                        h-9
                        rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border
                        border-white/25
                        flex
                        items-center
                        justify-center
                        opacity-0
                        translate-y-2
                        transition-all
                        duration-400
                        group-hover:opacity-100
                        group-hover:translate-y-0
                      "
                    >
                      <Heart
                        className="w-4 h-4 text-white"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Fine jewellery label */}

                    <div
                      className="
                        absolute
                        left-5
                        bottom-5
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <span
                        className="
                          h-px
                          w-6
                          bg-gold-light
                          transition-all
                          duration-500
                          group-hover:w-10
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
                        Fine Jewellery
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      PRODUCT DETAILS
                  ================================================== */}

                  <div className="mt-5">

                    <span
                      className="
                        text-[0.62rem]
                        tracking-[0.22em]
                        uppercase
                        text-gold
                      "
                    >
                      {p.metal}
                    </span>

                    <h3
                      className="
                        font-display
                        text-lg
                        text-ink
                        mt-1
                        leading-tight
                        transition-colors
                        duration-300
                        group-hover:text-maroon
                      "
                    >
                      {p.name}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-ink-soft
                        mt-2
                        leading-relaxed
                        line-clamp-2
                      "
                    >
                      {p.blurb}
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-4
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-maroon
                        transition-all
                        duration-300
                        group-hover:gap-4
                      "
                    >
                      <span>
                        View Details
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

                </Link>

              </Reveal>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM DECORATION
        ====================================================== */}

        <Reveal
          delay={0.35}
          className="
            flex
            items-center
            justify-center
            mt-12
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              text-ink-soft/50
            "
          >

            <span className="h-px w-10 bg-line" />

            <Sparkles
              className="
                w-3
                h-3
                text-gold
              "
            />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
              "
            >
              Crafted to be treasured
            </span>

            <Sparkles
              className="
                w-3
                h-3
                text-gold
              "
            />

            <span className="h-px w-10 bg-line" />

          </div>

        </Reveal>

      </div>
    </section>
  );
}