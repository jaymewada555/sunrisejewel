import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.5l.5-4H13V7a1 1 0 0 1 1-1h2z" strokeLinejoin="round" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M11 9.7v4.6l4-2.3-4-2.3Z" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-maroon-deep text-cream/90">
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light/60 to-transparent" />

      <div className="container-lg pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-White.png"
                alt="Sunrise Diamond & Jewels"
                width={300}
                height={100}
                className="h-[120px] w-auto object-contain"
              />
            </div>
            <p className="text-sm text-cream/65 leading-relaxed max-w-xs">
             Certified diamonds, crafted for your story.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold-light transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold-light transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="YouTube" className="text-cream/70 hover:text-gold-light transition-colors">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-cream transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link href="/book-us" className="hover:text-cream transition-colors">Book Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Categories</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link href="/products?category=Rings" className="hover:text-cream transition-colors">Rings</Link></li>
              <li><Link href="/products?category=Necklaces" className="hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link href="/products?category=Earrings" className="hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link href="/products?category=Bracelets" className="hover:text-cream transition-colors">Bracelets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact Us</h4>
            <ul className="space-y-3.5 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.6} />
                +91 70218 11747
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.6} />
                hello@sunrisediamonds.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.6} />
                123 Diamond Street, Mumbai, India
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.6} />
                Mon – Sat, 10:00 AM – 7:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10 opacity-20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Sunrise Diamond &amp; Jewels Pvt Ltd. All rights reserved.</p>
          <p className="tracking-wide">Fine jewellery for life&apos;s most cherished moments</p>
        </div>
      </div>
    </footer>
  );
}
 