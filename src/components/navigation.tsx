"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/88 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 shrink-0">
            <span className="text-[22px] font-[800] tracking-[-0.02em] font-display">
              <span className="text-[var(--navy)]">Agent</span>
              <span className="text-[var(--indigo)]">Land</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:text-[var(--navy)] group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[var(--indigo)] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href="#book-demo"
              className="hidden sm:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-lg bg-[var(--navy)] text-white shadow-[0_1px_3px_rgba(10,15,30,0.2),0_4px_12px_rgba(10,15,30,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(10,15,30,0.25),0_8px_24px_rgba(10,15,30,0.12)]"
            >
              Book a Demo
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-[var(--navy)] hover:bg-[var(--soft)] transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "translate-y-[7.25px] rotate-45"
                      : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "-translate-y-[7.25px] -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[72px] left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-lg md:hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className="flex items-center py-3 px-3 -mx-3 rounded-lg text-[15px] font-medium text-[#6B7280] hover:text-[var(--navy)] hover:bg-[var(--soft)] transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="pt-3 mt-2 border-t border-[var(--border-subtle)]">
                  <a
                    href="#book-demo"
                    onClick={closeMobile}
                    className="flex items-center justify-center w-full text-sm font-semibold px-5 py-3 rounded-lg bg-[var(--navy)] text-white shadow-[0_1px_3px_rgba(10,15,30,0.2),0_4px_12px_rgba(10,15,30,0.1)] transition-all duration-200 active:scale-[0.98]"
                  >
                    Book a Demo &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
