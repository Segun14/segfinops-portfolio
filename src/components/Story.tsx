const milestones = [
  {
    period: "Early Career",
    title: "The Spreadsheet Years",
    description:
      "Started in finance running reports, building models, pulling data from Salesforce by hand. Knew there had to be a better way. While my peers stuck with what they knew, I started asking: why are we doing this manually?",
  },
  {
    period: "Turning Point",
    title: "First Script, First Taste",
    description:
      "Wrote my first automation script to sync Salesforce reports. What used to take 4 hours took 15 minutes. That moment changed everything — I realized finance people don't need more spreadsheets. They need better infrastructure.",
  },
  {
    period: "Today",
    title: "Building the Machine",
    description:
      "Now I build full platforms and AI systems — commission portals, co-pilot agents, revenue engines — all while still owning the FP&A function. The hybrid doesn't exist at most companies. I'm making it the standard.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.08em] uppercase block mb-3">
            Background
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary tracking-[-0.02em]">
            How I got here
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[7rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((ms, i) => (
              <div key={i} className="md:grid md:grid-cols-12 md:gap-10 items-start">
                {/* Period label */}
                <div className="md:col-span-2 mb-3 md:mb-0">
                  <span className="text-text-muted text-[0.75rem] font-semibold uppercase tracking-[0.08em]">
                    {ms.period}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:col-span-1 justify-center pt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg-primary relative z-10" />
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-text-primary mb-2 tracking-[-0.01em]">
                    {ms.title}
                  </h3>
                  <p className="text-text-secondary text-[0.9375rem] leading-relaxed max-w-2xl">
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
