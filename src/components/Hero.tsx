export default function Hero() {
  return (
    <section className="hero-mesh min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-accent text-xs font-medium tracking-[0.2em] uppercase border border-accent-border bg-accent-muted px-4 py-1.5 rounded-full mb-8">
              FP&amp;A Engineer &times; Builder
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight mb-6 animate-fade-in-up animation-delay-200">
            I got tired of watching finance teams drown in spreadsheets.{" "}
            <span className="text-accent">So I started building.</span>
          </h1>

          {/* Subtext */}
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
            Senior FP&amp;A at a global telecom. I build the platforms, AI agents,
            and automation that most finance teams wish they had &mdash; commission
            portals, intelligent bots, data pipelines. Not because it&apos;s
            trendy. Because I&apos;ve lived the pain.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="#work"
              className="bg-accent hover:bg-accent-hover text-bg-primary font-medium px-7 py-3 rounded text-sm transition-all duration-300"
            >
              See the work
            </a>
            <a
              href="#story"
              className="border border-accent text-accent hover:bg-accent hover:text-bg-primary font-medium px-7 py-3 rounded text-sm transition-all duration-300"
            >
              My story
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-text-muted text-sm animate-fade-in-up animation-delay-800">
            <span>
              <span className="text-text-primary font-semibold">8</span> platforms
              shipped
            </span>
            <span className="text-border-hover">&middot;</span>
            <span>
              <span className="text-text-primary font-semibold">$300K+</span> saved
              annually
            </span>
            <span className="text-border-hover">&middot;</span>
            <span>
              <span className="text-text-primary font-semibold">75+</span> users
              served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
