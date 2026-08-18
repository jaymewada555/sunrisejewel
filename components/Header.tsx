"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

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
               width={50} height={50} className="w-[130px] h-[100px] md:w-[140px] md:h-[110px] object-contain"
            priority />
          {/* <span className="font-display text-lg md:text-xl tracking-wide text-maroon-deep leading-none">
            Sunrise
            <span className="block text-[0.55rem] tracking-[0.3em] font-sans font-normal text-ink-soft mt-0.5">
              DIAMOND &amp; JEWELS
            </span>
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-ink hover:text-maroon transition-colors group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+917021811747"
            className="flex items-center gap-2 text-sm text-ink-soft hover:text-maroon transition-colors"
          >
            <Phone className="w-4 h-4" strokeWidth={1.6} />
            +91 70218 11747
          </a>
          <Link href="/book-us" className="btn-primary">
            Book Appointment
          </Link>
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
            <Link href="/book-us" className="btn-primary w-fit" onClick={() => setOpen(false)}>
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
