export default function Hero() {
  return (
    <section className="animated-gradient dots-pattern relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-darker)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-[var(--text-muted)]">Available for consulting &amp; contract work</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-[var(--text-primary)]">I build</span>{" "}
          <span className="gradient-text">intelligent</span>
          <br />
          <span className="text-[var(--text-primary)]">finance systems</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto mb-10 leading-relaxed">
          FP&amp;A Engineer turning complex financial operations into
          automated, AI-powered platforms that save teams{" "}
          <span className="text-[var(--text-primary)] font-semibold">thousands of hours</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#projects" className="px-8 py-4 rounded-xl bg-[#6366F1] text-white font-semibold text-lg hover:bg-[#4F46E5] transition-all glow">View My Work</a>
          <a href="#contact" className="px-8 py-4 rounded-xl border border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-lg hover:bg-[var(--bg-dark)] transition-all">Get In Touch</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8+", label: "Projects Shipped" },
            { value: "$300K+", label: "Client Savings/yr" },
            { value: "75+", label: "Users Served" },
            { value: "4→0.08", label: "Days→Hours" },
          ].map((s) => (
            <div key={s.label} className="stat-pulse rounded-xl bg-[var(--bg-dark)]/60 backdrop-blur border border-[var(--border-light)] px-4 py-6">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</p>
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
