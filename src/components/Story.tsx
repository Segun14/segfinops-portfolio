const milestones = [
  {
    period: "Early Career",
    title: "The Spreadsheet Years",
    description:
      "Started in finance running reports, building models, pulling data from Salesforce by hand. Knew there had to be a better way. While my peers stuck with what they knew, I started asking: why are we doing this manually?",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    period: "Turning Point",
    title: "First Script, First Taste",
    description:
      "Wrote my first automation script to sync Salesforce reports. What used to take 4 hours took 15 minutes. That moment changed everything — I realized finance people don't need more spreadsheets. They need better infrastructure.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    period: "Today",
    title: "Building the Machine",
    description:
      "Now I build full platforms and AI systems — commission portals, co-pilot agents, revenue engines — all while still owning the FP&A function. The hybrid doesn't exist at most companies. I'm making it the standard.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Background
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-[-0.02em] mb-4">
            How I got here
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From Excel grids to full-stack finance platforms — the
            unconventional path of an FP&amp;A engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-border" />

          <div className="space-y-12">
            {milestones.map((ms, i) => (
              <div key={i} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-12 md:w-16 flex justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-light border-2 border-accent/20 flex items-center justify-center text-accent relative z-10">
                    {ms.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 card-hover">
                  <span className="text-accent text-[0.6875rem] font-semibold uppercase tracking-[0.08em] block mb-1">
                    {ms.period}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-[-0.01em]">
                    {ms.title}
                  </h3>
                  <p className="text-text-secondary text-[0.9375rem] leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
