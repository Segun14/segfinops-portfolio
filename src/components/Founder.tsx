export default function Founder() {
  return (
    <section id="founder" className="founder-band scroll-mt-20 relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 founder-grid opacity-40" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[0.6875rem] font-black uppercase tracking-[0.16em] text-cyan-200">
            Founder · PaidLens
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-5xl">
            I do not only improve finance workflows. I turn the strongest ideas into products.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            PaidLens grew from a problem I understood firsthand: commission data
            is often fragmented, difficult to explain, and expensive to operate.
            I founded the product to create a clearer intelligence layer across
            CRM, billing, planning, HRIS, and payroll workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://paidlens.com" target="_blank" rel="noopener noreferrer" className="button-primary">
              Visit PaidLens
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="button-ghost">Discuss a venture</a>
          </div>
        </div>

        <div className="founder-card rounded-[2rem] border border-white/10 p-6 shadow-2xl shadow-black/20 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">PaidLens</p>
              <p className="mt-1 text-xl font-bold text-white">Commission intelligence layer</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-white">PL</div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["Connect", "CRM, billing, planning, HRIS, payroll"],
              ["Explain", "Transparent calculations and payout evidence"],
              ["Control", "Access, approvals, audit history, governance"],
              ["Scale", "APIs, integrations, automated workflows"],
            ].map(([title, description], index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <span className="text-[0.625rem] font-black text-violet-300">0{index + 1}</span>
                <h3 className="mt-2 font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06] p-4 text-sm leading-relaxed text-cyan-100/80">
            Founder perspective: build the operational control first, then use technology to make it scalable and easier to understand.
          </div>
        </div>
      </div>
    </section>
  );
}
