"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", hreply_to: "#work" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
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
          ? "nav-blur bg-bg-primary/90 border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-playfair)] text-xl text-text-primary font-semibold tracking-tight"
          >
            S<span className="text-accent">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary transition-colors text-sm px-4 py-2 rounded-lg hover:bg-bg-tertiary/50"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-border mx-3" />
            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-5"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-bg-tertiary/50 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary/98 nav-blur border-t border-border-subtle px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary hover:text-text-primary transition-colors py-3 px-3 rounded-lg hover:bg-bg-tertiary/50"
            >
              {link.label}
            </a>
          ))}
          <div className="section-divider my-3" />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-center mt-1"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
