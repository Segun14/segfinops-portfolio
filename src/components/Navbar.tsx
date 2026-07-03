"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Background", hreply_to: "#story" },
  { label: "Services", hreply_to: "#services" },
  { label: "Contact", hreply_to: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-white/90 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[4.5rem]">
          <a
            href="#"
            className={`font-bold text-[0.9375rem] tracking-tight transition-colors ${
              scrolled ? "text-text-primary" : "text-text-inverse"
            }`}
          >
            Segun Odunlade
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8125rem] font-medium transition-colors ${
                  scrolled
                    ? "text-text-secondary hover:text-accent"
                    : "text-text-inverse-secondary hover:text-text-inverse"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`text-[0.8125rem] font-semibold px-5 py-2 rounded-lg transition-all ${
                scrolled
                  ? "bg-accent text-white hover:bg-accent-hover"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${mobileOpen && i === 0 ? "rotate-45 translate-y-[7px]" : ""}
                  ${mobileOpen && i === 1 ? "opacity-0" : ""}
                  ${mobileOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-text-secondary hover:text-accent transition-colors py-3 text-[0.9375rem] font-medium border-b border-border/50 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center bg-accent text-white font-semibold py-3 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
