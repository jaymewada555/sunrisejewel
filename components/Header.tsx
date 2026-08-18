"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Search, ShoppingBag, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/book-us", label: "Book Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <div className="container-lg flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
           src="/images/logo-transparent.png"
           alt="Sunrise Diamond & Jewels"
           width={50}
           height={50}
           className="w-[130px] h-[100px] md:w-[140px] md:h-[110px] object-contain"
           priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
           <Link
             key={link.href}
             href={link.href}
             className="relative text-[0.68rem] tracking-[0.18em] uppercase text-ink hover:text-maroon transition-colors group"
           >
             {link.label}
             <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
           </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+917021811747" className="flex items-center gap-2 text-xs text-ink-soft hover:text-maroon transition-colors">
           <Phone className="w-4 h-4" strokeWidth={1.6} />
           +91 70218 11747
          </a>
          <div className="flex items-center gap-2 text-ink-soft">
           <button aria-label="Search" className="p-1.5 hover:text-maroon transition-colors">
             <Search className="w-4 h-4" strokeWidth={1.8} />
           </button>
           <button aria-label="Bag" className="p-1.5 hover:text-maroon transition-colors">
             <ShoppingBag className="w-4 h-4" strokeWidth={1.8} />
           </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-maroon-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-cream">
          <nav className="container-lg flex flex-col py-4 gap-4">
           {navLinks.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               className="text-base text-ink hover:text-maroon transition-colors"
               onClick={() => setOpen(false)}
             >
               {link.label}
             </Link>
           ))}
           <a href="tel:+917021811747" className="flex items-center gap-2 text-sm text-ink-soft">
             <Phone className="w-4 h-4" strokeWidth={1.6} />
             +91 70218 11747
           </a>
           <div className="flex items-center gap-3 text-ink-soft">
             <button aria-label="Search" className="p-2 border border-line rounded-full">
               <Search className="w-4 h-4" strokeWidth={1.8} />
             </button>
             <button aria-label="Bag" className="p-2 border border-line rounded-full">
               <ShoppingBag className="w-4 h-4" strokeWidth={1.8} />
             </button>
           </div>
          </nav>
        </div>
      )}
    </header>
  );
}
