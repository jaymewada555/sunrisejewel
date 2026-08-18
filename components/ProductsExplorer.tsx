"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, X } from "lucide-react";
import { products, categories, type Category, type Metal, type Occasion } from "@/lib/data";
import { categoryIcon } from "@/components/JewelIcons";
import ArtPanel from "@/components/ArtPanel";

const metals: Metal[] = ["Yellow Gold", "Rose Gold", "White Gold", "Platinum"];
const occasions: Occasion[] = ["Bridal", "Everyday", "Gifting", "Statement"];

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
      className={`px-4 py-1.5 text-xs tracking-wide border transition-colors ${
        active
          ? "bg-maroon border-maroon text-cream"
          : "border-line text-ink-soft hover:border-maroon hover:text-maroon"
      }`}
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
  const [occasion, setOccasion] = useState<Occasion | "All">(
    (searchParams.get("occasion") as Occasion) || "All"
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (metal !== "All" && p.metal !== metal) return false;
      if (occasion !== "All" && p.occasion !== occasion) return false;
      return true;
    });
  }, [category, metal, occasion]);

  const hasActiveFilters = category !== "All" || metal !== "All" || occasion !== "All";

  return (
    <section className="section">
      <div className="container-lg">
        <div className="border border-line p-6 md:p-7 mb-12">
          <div className="flex items-center justify-between mb-5">
            <span className="eyebrow">Filter</span>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setCategory("All");
                  setMetal("All");
                  setOccasion("All");
                }}
                className="flex items-center gap-1 text-xs text-maroon hover:text-maroon-deep"
              >
                <X className="w-3.5 h-3.5" /> Clear all
              </button>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs text-ink-soft mb-2.5">Category</p>
              <div className="flex flex-wrap gap-2.5">
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
              <p className="text-xs text-ink-soft mb-2.5">Metal</p>
              <div className="flex flex-wrap gap-2.5">
                <FilterPill label="All" active={metal === "All"} onClick={() => setMetal("All")} />
                {metals.map((m) => (
                  <FilterPill key={m} label={m} active={metal === m} onClick={() => setMetal(m)} />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-ink-soft mb-2.5">Occasion</p>
              <div className="flex flex-wrap gap-2.5">
                <FilterPill label="All" active={occasion === "All"} onClick={() => setOccasion("All")} />
                {occasions.map((o) => (
                  <FilterPill key={o} label={o} active={occasion === o} onClick={() => setOccasion(o)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-ink-soft mb-6">
          Showing {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-line">
            <p className="text-ink-soft text-sm">
              No pieces match those filters yet. Try clearing a filter, or message
              us — we likely have it in the workshop.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p) => {
              const Icon = categoryIcon[p.category];
              const waMessage = `Hi Sunrise Diamond & Jewels, I'd like to enquire about the ${p.name} (${p.metal}).`;
              return (
                <div key={p.id} className="group border border-line hover:border-gold transition-colors">
                  <ArtPanel icon={Icon} tone="cream" className="aspect-square" />
                  <div className="p-5">
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold">
                      {p.metal} · {p.occasion}
                    </span>
                    <h3 className="font-display text-lg text-ink mt-1.5">{p.name}</h3>
                    <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{p.blurb}</p>
                    <a
                      href={`https://wa.me/917021811747?text=${encodeURIComponent(waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 border border-[#25D366] text-[#128C4A] text-xs tracking-wide uppercase hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" strokeWidth={1.8} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
