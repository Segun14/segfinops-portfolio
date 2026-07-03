const beliefs = [
  {
    text: "The best finance teams don't just report numbers — they build systems that make reporting irrelevant.",
    highlight: "build systems",
  },
  {
    text: "If you're still copy-pasting data between tools, you're burning money. Automation isn't a nice-to-have — it's finance infrastructure.",
    highlight: "finance infrastructure",
  },
  {
    text: "AI won't replace FP&A professionals. But FP&A professionals who build with AI will replace those who don't.",
    highlight: "build with AI",
  },
];

export default function Beliefs() {
  return (
    <section className="py-24 md:py-32 bg-bg-dark relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-indigo-400 text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Perspective
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-white tracking-[-0.02em]">
            What I believe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-300 group"
            >
              <div className="text-5xl font-bold text-accent/30 mb-4 leading-none">&ldquo;</div>
              <p className="text-white/90 text-[1.0625rem] leading-relaxed font-medium">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
