"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--bg-darker)]/90 backdrop-blur-lg border-b border-[var(--border-light)] py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">SO.</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">{l.label}</a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="px-5 py-2 rounded-lg bg-[#6366F1] text-white text-sm font-medium hover:bg-[#4F46E5] transition-colors">Hire Me</a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-[var(--text-primary)]" aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[var(--bg-darker)]/95 backdrop-blur-lg border-t border-[var(--border-light)] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-2">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block px-5 py-2 rounded-lg bg-[#6366F1] text-white text-center text-sm font-medium mt-3">Hire Me</a>
        </div>
      )}
    </nav>
  );
}
