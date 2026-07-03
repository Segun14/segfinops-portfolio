const beliefs = [
  {
    text: "The best finance teams don't just report numbers — they build systems that make reporting irrelevant.",
  },
  {
    text: "If you're still copy-pasting data between tools, you're burning money. Automation isn't a nice-to-have — it's finance infrastructure.",
  },
  {
    text: "AI won't replace FP&A professionals. But FP&A professionals who build with AI will replace those who don't.",
  },
];

export default function Beliefs() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.08em] uppercase block mb-3">
            Perspective
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary tracking-[-0.02em]">
            What I believe
          </h2>
        </div>

        <div className="space-y-6">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="bg-bg-card border border-border rounded-xl px-8 md:px-10 py-8 flex gap-6 items-start"
            >
              <span className="text-accent text-2xl font-bold leading-none mt-0.5 hidden sm:block">&ldquo;</span>
              <p className="text-text-primary text-lg md:text-xl leading-relaxed font-medium">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
