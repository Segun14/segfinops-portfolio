export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-darker)] border-t border-[var(--border-color)]/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold gradient-text">
              SO.
            </a>
            <p className="text-sm text-[var(--text-dim)] mt-2">
              FP&A Engineer · EPM Architect · Agentic AI Builder
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[var(--text-dim)]">
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:segunodunlade2014@gmail.com"
              className="w-10 h-10 rounded-full bg-[var(--bg-dark)] border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6366F1]/50 transition-colors"
              aria-label="Email"
            >
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/oluwasegun-odunlade-b71482175"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--bg-dark)] border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#6366F1]/50 transition-colors"
              aria-label="LinkedIn"
            >
              💼
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)]/30 text-center">
          <p className="text-xs text-[var(--text-placeholder)]">
            © {year} Oluwasegun Odunlade. Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
