const chapters = [
  {
    number: "01",
    title: "Finance operator",
    description:
      "I learned the work from inside FP&A—reporting, forecasting, revenue analysis, commissions, planning, and the recurring pressure to explain numbers clearly.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    number: "02",
    title: "Systems builder",
    description:
      "Repeated manual work pushed me into APIs, databases, automation, and application development. I began turning recurring workflows into dependable systems.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "03",
    title: "Product founder",
    description:
      "The strongest internal lessons became product ideas. Founding PaidLens added customer discovery, product strategy, packaging, and commercial discipline to how I build.",
    color: "from-rose-400 to-orange-400",
  },
];

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <span className="section-kicker">My operating journey</span>
            <h2 className="section-title mt-4">Finance depth. Builder instinct. Founder ownership.</h2>
            <p className="section-copy mt-5">
              My advantage is not simply knowing finance or knowing how to code.
              It is understanding the operating problem well enough to design the
              right control, then building the system that makes it repeatable.
            </p>
          </div>

          <div className="grid gap-5">
            {chapters.map((chapter) => (
              <article key={chapter.number} className="group relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/50 md:p-8">
                <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${chapter.color}`} />
                <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                  <span className="text-3xl font-black text-slate-200 transition group-hover:text-violet-200">{chapter.number}</span>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950">{chapter.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{chapter.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
