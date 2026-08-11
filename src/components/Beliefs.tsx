const principles = [
  {
    number: "01",
    title: "Controls before cleverness",
    text: "Reliable definitions, reconciled data, and visible approvals come before automation or AI.",
  },
  {
    number: "02",
    title: "Build for the decision",
    text: "A finance product should shorten the distance between a business question and a confident action.",
  },
  {
    number: "03",
    title: "Explain every number",
    text: "The best systems preserve evidence and make the calculation understandable to the people affected by it.",
  },
];

export default function Beliefs() {
  return (
    <section className="principles-band relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 founder-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] font-black uppercase tracking-[0.17em] text-cyan-300">How I build</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white md:text-5xl">Principles that keep finance technology useful.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">Technology creates leverage only when the underlying financial logic remains governed, traceable, and understood.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.number} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.07]">
              <span className="text-sm font-black text-cyan-300">{principle.number}</span>
              <h3 className="mt-8 text-xl font-black text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
