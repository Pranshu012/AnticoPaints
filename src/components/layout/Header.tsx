"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products/" },
  { name: "Colours", href: "/colours/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-beige"
          : "bg-brand-offwhite border-b border-brand-beige/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Official Brand Logo */}
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
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              style={{ maxHeight: "44px", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation & Dealer CTA */}
          <div className="hidden md:flex items-center space-x-7">
            <nav
              className="flex items-center space-x-7"
              aria-label="Primary Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href.replace(/\/$/, ""));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-xs uppercase tracking-luxury font-sans font-medium transition-colors relative py-1.5 ${
                      isActive
                        ? "text-brand-black font-semibold"
                        : "text-brand-black/70 hover:text-brand-gold"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/become-a-dealer/"
              className="inline-flex items-center justify-center px-4 py-2 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-medium uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              Become a Dealer
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

      {/* Simple, Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-beige bg-brand-offwhite px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href.replace(/\/$/, ""));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm tracking-wide font-sans py-2.5 border-b border-brand-beige/40 ${
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

          <div className="pt-2 border-t border-brand-beige/60">
            <Link
              href="/become-a-dealer/"
              className="w-full inline-flex items-center justify-center px-5 py-3 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black text-xs font-sans font-semibold uppercase tracking-wider rounded-md transition-colors text-center shadow-sm"
            >
              Become a Dealer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
