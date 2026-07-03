export default function Footer() {
  return (
    <footer className="py-12 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Gradient divider */}
        <div className="gradient-line w-16 mb-10" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-white font-bold text-lg tracking-tight block mb-1">
              Segun Odunlade
            </span>
            <span className="text-white/50 text-sm">
              Senior FP&amp;A · Finance Systems Builder
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/oluwasegun-odunlade-b71484175"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:segunodunlade2014@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Segun Odunlade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
