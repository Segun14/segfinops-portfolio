const beliefs = [
  "Finance teams shouldn\u2019t need to file tickets to access their own data.",
  "If you\u2019re doing the same thing manually every month, that\u2019s a design failure.",
  "The best finance tools are built by people who\u2019ve actually closed the books.",
];

export default function Beliefs() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase block mb-4">
            What I believe
          </span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className="border-l-2 border-accent pl-6 py-4"
            >
              <p className="text-text-primary text-lg leading-relaxed font-[family-name:var(--font-playfair)] italic">
                &ldquo;{belief}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
