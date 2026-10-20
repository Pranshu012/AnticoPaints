"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data/company";
import { Menu, X, ArrowUpRight, Palette } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-beige"
          : "bg-brand-offwhite border-b border-brand-beige/60"
      }`}
    >
      {/* Top Specification Banner */}
      <div className="bg-brand-black text-brand-beige-light text-[11px] tracking-wider py-1.5 px-4 text-center border-b border-brand-charcoal">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
          <span>Architectural Specification Service &amp; Project Consultations Open for 2026 Contracts</span>
          <Link
            href="/contact"
            className="text-brand-gold hover:underline inline-flex items-center ml-1"
          >
            Enquire Desk <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </Link>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Official Uploaded Shield and Wordmark */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-none py-1"
            aria-label="Antico Paints Home"
          >
            <Image
              src="/images/logo/antico-logo.png"
              alt="Antico Paints"
              width={180}
              height={64}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ maxHeight: "48px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Primary Navigation"
          >
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs uppercase tracking-luxury font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-brand-black font-semibold"
                      : "text-brand-black/70 hover:text-brand-gold"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/colours"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-brand-black/80 hover:text-brand-gold py-2 px-3 transition-colors"
            >
              <Palette className="w-3.5 h-3.5 text-brand-gold" />
              <span>Palette Studio</span>
            </Link>

            <Link
              href="/#catalogues"
              className="px-5 py-2.5 text-xs font-medium tracking-luxury uppercase bg-brand-black text-brand-offwhite border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300 shadow-subtle"
            >
              Catalogues
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-black hover:text-brand-gold transition-colors focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-beige bg-brand-offwhite px-6 pt-6 pb-8 space-y-4 shadow-lg animate-fadeIn">
          <div className="mb-4">
            <Image
              src="/images/logo/antico-logo.png"
              alt="Antico Paints"
              width={150}
              height={54}
              className="h-10 w-auto object-contain"
              style={{ maxHeight: "40px", width: "auto" }}
            />
          </div>
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-luxury uppercase py-2 border-b border-brand-beige/50 ${
                    isActive
                      ? "text-brand-gold font-semibold"
                      : "text-brand-black hover:text-brand-gold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/colours"
              className="flex items-center justify-center gap-2 py-3 text-xs tracking-luxury uppercase border border-brand-gold text-brand-black hover:bg-brand-gold/10"
            >
              <Palette className="w-4 h-4 text-brand-gold" />
              Explore Colour Library
            </Link>
            <Link
              href="/#catalogues"
              className="py-3 text-center text-xs tracking-luxury uppercase bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black"
            >
              Download Catalogues
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
