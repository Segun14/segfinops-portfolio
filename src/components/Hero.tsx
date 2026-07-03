export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center bg-bg-primary relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-32 md:py-40 w-full">
        <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
          {/* Left content — 7 cols */}
          <div className="md:col-span-7">
            {/* Role tag */}
            <div className="animate-fade-in-up">
              <span className="inline-block text-accent text-[0.75rem] font-semibold tracking-[0.08em] uppercase mb-5">
                Senior FP&amp;A · Finance Systems Builder
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold text-text-primary leading-[1.1] tracking-[-0.025em] mb-6 animate-fade-in-up delay-1">
              Segun Odunlade
            </h1>

            {/* Description */}
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-2">
              I build the platforms, AI agents, and automation systems that
              modern finance teams need — from commission portals to intelligent
              data pipelines.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up delay-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-accent text-text-inverse font-medium px-7 py-3.5 rounded-lg text-[0.875rem] hover:bg-accent-hover transition-colors"
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-text-secondary font-medium px-7 py-3.5 rounded-lg text-[0.875rem] hover:border-accent hover:text-accent transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right side — key stats card — 5 cols */}
          <div className="md:col-span-5 animate-fade-in-up delay-4">
            <div className="bg-bg-secondary border border-border rounded-xl p-8 md:p-10">
              <h3 className="text-[0.6875rem] font-semibold text-text-muted uppercase tracking-[0.12em] mb-8">
                At a Glance
              </h3>
              <div className="space-y-7">
                <div>
                  <div className="text-3xl font-bold text-text-primary">$300K+</div>
                  <div className="text-text-muted text-sm mt-0.5">Annual cost savings delivered</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-text-primary">75+</div>
                  <div className="text-text-muted text-sm mt-0.5">Users across finance &amp; sales</div>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-text-primary">8</div>
                  <div className="text-text-muted text-sm mt-0.5">Platforms built &amp; integrated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
