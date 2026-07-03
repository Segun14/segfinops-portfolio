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
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.08em] uppercase block mb-3">
            Services
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary tracking-[-0.02em]">
            How I can help
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-bg-secondary border border-border rounded-xl p-8 hover:border-accent/30 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-text-inverse transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {svc.title}
              </h3>
              <p className="text-text-secondary text-[0.9375rem] leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
