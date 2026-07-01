const beats = [
  {
    title: "The spreadsheet years",
    text: "Every month, same story. Four days locked in Excel. Cross-referencing commission data across 75 account executives. Copy-paste from Salesforce. Manually update the shared drive. Email the results. Wait for complaints. Fix errors. Repeat. I knew there had to be a better way \u2014 I just didn\u2019t know I\u2019d be the one building it.",
  },
  {
    title: "The first script",
    text: "It started small. A Node.js script that pulled Salesforce reports from Gmail, validated the data, and synced it to Google Drive automatically. Saved 10 hours a month. Nothing fancy. But watching that script run for the first time \u2014 replacing work I\u2019d been doing manually for months \u2014 something clicked. If I could automate this, what else was I leaving on the table?",
  },
  {
    title: "Building the machine",
    text: "That script turned into a data pipeline. The pipeline led to a commission portal. The portal needed an API integration with Anaplan. Then leadership wanted instant answers \u2014 so I built a Slack bot connected to our revenue engine. Then I built an AI agent that monitors email, calendar, pipeline data, and proactively flags issues before anyone asks. One automation at a time, I built an entire finance operating layer. Now I help other teams do the same.",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase block mb-4">
            The journey
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-tight">
            From spreadsheets to systems
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-16 md:space-y-24">
            {beats.map((beat, i) => (
              <div key={i} className="relative pl-12 md:pl-0">
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{ top: "0.5rem" }}
                />

                {/* Content — alternate sides on desktop */}
                <div
                  className={`md:w-5/12 ${
                    i % 2 === 0
                      ? "md:mr-auto md:pr-16 md:text-right"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary mb-3">
                    {beat.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
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
