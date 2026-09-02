import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Coming Soon | Sunrise Diamond & Jewels",
  description:
    "Our upcoming collection is being curated. Explore the latest designs soon.",
};

export default function ComingSoonPage() {
  return (
    <main className="section">
      <div className="container-lg">
        <Reveal className="mx-auto max-w-3xl rounded-[32px] border border-line bg-[#fffaf4] px-6 py-16 text-center shadow-[0_18px_45px_rgba(63,12,21,0.06)] md:px-12">
          <span className="eyebrow text-maroon-soft">New Arrivals</span>
          <h1 className="mt-4 font-display text-4xl md:text-[4rem] text-maroon-deep">
            Coming Soon
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm md:text-base text-ink-soft leading-relaxed">
            Our next collection is being curated with fresh designs, timeless craftsmanship,
            and signature pieces made for your most meaningful moments.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            
            <Link href="/" className="btn-secondary">
              Explore home
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
