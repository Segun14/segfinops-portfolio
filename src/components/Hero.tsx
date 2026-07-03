export default function Hero() {
  return (
    <section className="hero-gradient min-h-[100dvh] flex items-center relative">
      <div className="hero-grid" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-32 md:py-40 w-full relative z-10">
        <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
          {/* Left — 7 cols */}
          <div className="md:col-span-7">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-indigo-300 text-[0.75rem] font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </div>

            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6 animate-fade-in-up delay-1">
              I build intelligent
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                finance systems
              </span>
            </h1>

            <p className="text-text-inverse-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-2">
              Senior FP&amp;A professional who codes. Commission platforms,
              AI agents, and automation that save finance teams thousands of hours.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 bg-accent font-semibold px-8 py-4 rounded-xl text-white text-[0.875rem] hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-[0.875rem] hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right — stats — 5 cols */}
          <div className="md:col-span-5 mt-16 md:mt-0 animate-slide-right delay-4">
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-white stat-glow">$300K+</div>
                  <div className="text-text-inverse-secondary text-sm mt-1">Annual cost savings delivered</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold text-white stat-glow">75+</div>
                  <div className="text-text-inverse-secondary text-sm mt-1">Users across finance &amp; sales</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold text-white stat-glow">8</div>
                  <div className="text-text-inverse-secondary text-sm mt-1">Platforms built &amp; integrated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
