"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Founder", href: "#founder" },
  { label: "Story", href: "#story" },
  { label: "Capabilities", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "nav-blur border-b border-slate-200/80 bg-white/95 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-[4.75rem] items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Segun Odunlade — back to top">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/20">
              SO
            </span>
            <span className={`text-sm font-bold tracking-tight ${scrolled || mobileOpen ? "text-slate-950" : "text-white"}`}>
              Segun Odunlade
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8125rem] font-semibold transition-colors ${
                  scrolled ? "text-slate-600 hover:text-violet-600" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:segunodunlade2014@gmail.com?subject=Portfolio%20enquiry"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-[0.8125rem] font-bold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
            >
              Start a conversation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`rounded-lg p-2 md:hidden ${scrolled || mobileOpen ? "text-slate-950" : "text-white"}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 pb-6 pt-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 transition hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:segunodunlade2014@gmail.com?subject=Portfolio%20enquiry"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Start a conversation
          </a>
        </div>
      )}
    </nav>
  );
}
