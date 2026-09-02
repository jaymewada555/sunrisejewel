"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products/coming-soon", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/find-us", label: "Find Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">

      {/* Main Header */}
      <div className="container-lg flex items-center justify-between gap-1 py-[8px] md:gap-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 overflow-visible justify-start -ml-1 md:ml-0"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-[60px] w-[145px] sm:h-[82px] sm:w-[220px] md:h-[100px] md:w-[300px]">
            <Image
              src="/images/logo-transparent.png"
              alt="Sunrise Diamond & Jewels"
              fill
              sizes="(max-width: 767px) 145px, 300px"
              className="object-contain"
              priority
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-5">

          {/* Phone */}
          <a
            href="tel:+918424000907"
            className="flex items-center gap-2 text-xs text-ink-soft hover:text-maroon transition-colors"
          >
            <Phone
              className="w-4 h-4"
              strokeWidth={1.6}
            />

            +91 84240 00907
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden ml-auto flex items-center justify-center p-2 text-maroon-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-cream">

          <nav className="container-lg flex flex-col py-4 gap-4">

            {/* Navigation Links */}
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

            {/* Phone */}
            <a
              href="tel:+918424000907"
              className="flex items-center gap-2 text-sm text-ink-soft"
            >
              <Phone
                className="w-4 h-4"
                strokeWidth={1.6}
              />

              +91 84240 00907
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}