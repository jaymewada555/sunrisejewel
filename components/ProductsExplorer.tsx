"use client";

import { motion } from "framer-motion";
import { ListFilter, MessageCircle, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal";
import { products, categories, type Category, type Metal } from "@/lib/data";

const metals: Metal[] = ["Yellow Gold", "Rose Gold", "White Gold"];

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`catalog-filter-pill ${active ? "active" : ""}`}
    >
      {label}
    </button>
  );
}

export default function ProductsExplorer() {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<Category | "All">(
    (searchParams.get("category") as Category) || "All"
  );
  const [metal, setMetal] = useState<Metal | "All">("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (metal !== "All" && p.metal !== metal) return false;
      return true;
    });
  }, [category, metal]);

  const hasActiveFilters = category !== "All" || metal !== "All";

  return (
    <section className="catalog-page section">
      <div className="container-lg">
        <div className="catalog-layout">
        <Reveal className={`catalog-toolbar ${filterOpen ? "is-open" : ""}`}>
          <div className="catalog-toolbar-inner">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <span className="eyebrow text-maroon-soft">Filter Collection</span>
                <p className="mt-1 text-xs text-ink-soft">Find your perfect piece</p>
              </div>
              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
                className="catalog-filter-close"
              >
                <X className="w-5 h-5" />
              </button>
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    setCategory("All");
                    setMetal("All");
                  }}
                  className="flex items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-maroon hover:text-maroon-deep"
                >
                  <X className="w-3.5 h-3.5" /> Clear all
                </button>
              )}
            </div>

            <div className="catalog-filter-stack">
              <div>
                <p className="catalog-filter-label">Category</p>
                <div className="catalog-filter-group">
                  <FilterPill label="All" active={category === "All"} onClick={() => setCategory("All")} />
                  {categories.map((c) => (
                    <FilterPill
                      key={c.name}
                      label={c.name}
                      active={category === c.name}
                      onClick={() => setCategory(c.name)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="catalog-filter-label">Metal</p>
                <div className="catalog-filter-group">
                  <FilterPill label="All" active={metal === "All"} onClick={() => setMetal("All")} />
                  {metals.map((m) => (
                    <FilterPill key={m} label={m} active={metal === m} onClick={() => setMetal(m)} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        <div className="catalog-results">
          <div className="catalog-meta">
          <p className="text-sm text-ink-soft">
            Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
          </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>
              No pieces match those filters yet. Try clearing a filter, or message us —
              we likely have it in the workshop.
            </p>
          </div>
        ) : (
          <div className="catalog-grid">
            {filtered.map((product, index) => {
              const waMessage = `Hi Sunrise Diamond & Jewels, I'd like to enquire about the ${product.name} (${product.metal}).`;

              return (
                <Reveal key={product.id} delay={index * 0.04} className="h-full">
                  <motion.article
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="product-card group"
                  >
                    <div className="product-media">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/15" />
                    </div>

                    <div className="product-body">
                      <div className="product-topline">
                        <span className="product-spec">
                          {product.category.toUpperCase()} · {product.metal}
                        </span>
                        <span className="product-badge">New</span>
                      </div>

                      <h3 className="product-title font-display text-[1.3rem] leading-none text-ink mt-3">
                        {product.name}
                      </h3>

                      {/* <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                        {product.blurb}
                      </p> */}

                      <div className="product-footer">
                        {/* <span className="product-price">{product.price}</span> */}
                        <a
                          href={`https://wa.me/918424000907?text=${encodeURIComponent(waMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="product-action"
                        >
                          <MessageCircle className="w-4 h-4" strokeWidth={1.8} />
                          Enquire
                        </a>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        )}
        </div>
        </div>

        <div
          className={`catalog-filter-backdrop ${filterOpen ? "is-open" : ""}`}
          onClick={() => setFilterOpen(false)}
          aria-hidden="true"
        />

        <button
          type="button"
          className="catalog-filter-fab"
          onClick={() => setFilterOpen(true)}
          aria-label="Open filters"
        >
          <ListFilter className="w-5 h-5" />
          <span>Filter</span>
        </button>

        <Reveal className="custom-design-banner">
          <div className="custom-design-inner">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-5 h-5 text-maroon-soft mb-3" />
              <h3 className="font-display text-[2.2rem] md:text-[2.7rem] leading-none text-ink">
                Can&apos;t find exactly what you imagined?
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft">
                We custom-design every piece to match your story, setting, and budget.
              </p>
              <a href="/book-us" className="btn-primary mt-6">
                Start a custom design
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
