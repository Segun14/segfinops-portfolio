const services = [
  {
    title: "Finance Applications",
    description:
      "Custom-built platforms for commission management, planning dashboards, and data automation. Database to deployment.",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent agents deployed across Slack, Teams, email. Connected to your EPM, CRM, and data sources.",
  },
  {
    title: "EPM & Anaplan",
    description:
      "Model building, CloudWorks automation, API integration, and migration from legacy tools.",
  },
  {
    title: "FP&A Strategy",
    description:
      "Revenue forecasting, NRR analysis, board decks, scenario planning. Strategic finance that moves the needle.",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase block mb-4">
            How I can help
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-tight">
            What I offer
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group border border-border hover:border-accent-border rounded-lg p-8 transition-all duration-300 hover:bg-bg-tertiary"
            >
              <h3 className="text-text-primary text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {svc.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
