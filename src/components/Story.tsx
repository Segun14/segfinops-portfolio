const beats = [
  {
    number: "01",
    title: "The spreadsheet years",
    text: "Every month, same story. Four days locked in Excel. Cross-referencing commission data across 75 account executives. Copy-paste from Salesforce. Manually update the shared drive. Email the results. Wait for complaints. Fix errors. Repeat. I knew there had to be a better way — I just didn\u2019t know I\u2019d be the one building it.",
  },
  {
    number: "02",
    title: "The first script",
    text: "It started small. A Node.js script that pulled Salesforce reports from Gmail, validated the data, and synced it to Google Drive automatically. Saved 10 hours a month. Nothing fancy. But watching that script run for the first time — replacing work I\u2019d been doing manually for months — something clicked. If I could automate this, what else was I leaving on the table?",
  },
  {
    number: "03",
    title: "Building the machine",
    text: "That script turned into a data pipeline. The pipeline led to a commission portal. The portal needed an API integration with Anaplan. Then leadership wanted instant answers — so I built a Slack bot connected to our revenue engine. Then I built an AI agent that monitors email, calendar, pipeline data, and proactively flags issues before anyone asks. One automation at a time, I built an entire finance operating layer. Now I help other teams do the same.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-bg-primary relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-xl">
          <span className="tag-badge mb-5">The journey</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-[-0.02em] mb-4">
            From spreadsheets to systems
          </h2>
          <p className="text-text-secondary leading-relaxed">
            How a frustration with manual processes turned into a career building
            intelligent finance infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-14 md:space-y-18">
            {beats.map((beat, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="timeline-dot" style={{ top: "0.375rem" }} />

                {/* Content */}
                <div className="card-elevated p-6 md:p-8 ml-4 md:ml-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-[family-name:var(--font-playfair)] text-accent text-sm font-semibold opacity-60">
                      {beat.number}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary tracking-tight">
                      {beat.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                    {beat.text}
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
