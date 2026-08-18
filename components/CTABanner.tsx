import Link from "next/link";
import { ArrowRight, Video, Store } from "lucide-react";
import { SunburstRays } from "@/components/JewelIcons";
import Reveal from "@/components/Reveal";

export default function CTABanner() {
  return (
    <section className="section-tight">
      <div className="container-lg">
        <Reveal className="relative overflow-hidden bg-maroon-deep px-8 py-14 md:px-16 md:py-16 text-center">
          <SunburstRays className="sunburst-mark w-[420px] h-[420px] text-gold-light left-1/2 -translate-x-1/2 -top-40 animate-slow-spin" />
          <span className="eyebrow text-gold-light">Talk to Us</span>
          <h2 className="font-display text-cream text-3xl md:text-[2.4rem] mt-3 max-w-xl mx-auto">
            Let&apos;s Find Your Perfect Piece
          </h2>
          <p className="text-cream/65 max-w-md mx-auto mt-4 text-sm leading-relaxed">
            Speak with a diamond consultant over video, or visit a Sunrise store
            near you for a hands-on styling session.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-us" className="btn-outline-light">
              <Video className="w-3.5 h-3.5" /> Book Video Call
            </Link>
            <Link href="/book-us" className="btn-primary !bg-gold !border-gold !text-maroon-deep hover:!bg-gold-light">
              <Store className="w-3.5 h-3.5" /> Visit a Store
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
