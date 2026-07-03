const services = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Finance Applications",
    description:
      "Custom-built platforms for commission management, planning dashboards, and data automation. Database to deployment.",
    tags: ["Next.js", "PostgreSQL", "APIs"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI & Automation",
    description:
      "Intelligent agents deployed across Slack, Teams, email. Connected to your EPM, CRM, and data sources.",
    tags: ["LLMs", "Slack Bots", "Pipelines"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "EPM & Anaplan",
    description:
      "Model building, CloudWorks automation, API integration, and migration from legacy tools.",
    tags: ["Anaplan", "CloudWorks", "ETL"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "FP&A Strategy",
    description:
      "Revenue forecasting, NRR analysis, board decks, scenario planning. Strategic finance that moves the needle.",
    tags: ["Forecasting", "Board Decks", "NRR"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Services
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-[-0.02em] mb-4">
            How I can help
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Whether you need a full platform built or a strategic advisor who
            understands the tech — I deliver both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-bg-card border border-border rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {svc.title}
              </h3>
              <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-5">
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map(tag => (
                  <span key={tag} className="text-[0.6875rem] font-medium text-text-muted bg-bg-secondary px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
