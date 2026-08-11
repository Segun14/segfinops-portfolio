import { HeroDashboardPreview } from "./ProductMockups";

export default function Hero() {
  return (
    <section id="top" className="hero-spectrum relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <div className="animate-fade-in-up flex flex-wrap gap-2">
            <span className="hero-badge">Senior FP&amp;A</span>
            <span className="hero-badge hero-badge-cyan">Founder, PaidLens</span>
            <span className="hero-badge hero-badge-coral">Finance Systems Builder</span>
          </div>

          <h1 className="animate-fade-in-up delay-1 mt-7 max-w-3xl text-[2.8rem] font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.65rem]">
            I build finance systems that turn complexity into
            <span className="text-spectrum"> clear decisions.</span>
          </h1>

          <p className="animate-fade-in-up delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            I sit at the intersection of finance, product, and engineering—leading
            FP&amp;A work, building internal operating systems, and founding products
            that make financial workflows easier to trust.
          </p>

          <div className="animate-fade-in-up delay-3 mt-9 flex flex-wrap gap-4">
            <a href="#work" className="button-primary">
              Explore the work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#founder" className="button-ghost">Founder story</a>
          </div>

          <div className="animate-fade-in-up delay-4 mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {[
              ["8", "systems delivered"],
              ["75+", "users supported"],
              ["3", "disciplines connected"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-black text-white md:text-3xl">{value}</p>
                <p className="mt-1 text-[0.6875rem] leading-snug text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-slide-right delay-3 relative">
          <div className="absolute -inset-8 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="relative rotate-[1deg] transition duration-500 hover:rotate-0 hover:scale-[1.01]">
            <HeroDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
