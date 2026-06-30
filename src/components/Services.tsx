const services = [
  {
    icon: "🔧",
    title: "Internal Tool Development",
    desc: "Custom-built applications for finance teams — commission portals, planning dashboards, data automation platforms. From concept to production, designed around your existing data stack.",
    tags: ["Next.js", "React", "PostgreSQL", "REST APIs"],
  },
  {
    icon: "🤖",
    title: "Agentic AI Integration",
    desc: "Deploy intelligent AI agents across Slack, Teams, and other platforms that connect to your EPM tools, CRM, and data sources. Leadership gets instant answers. Finance teams get time back.",
    tags: ["Slack Bots", "AI Agents", "LLM", "Workflow Automation"],
  },
  {
    icon: "📊",
    title: "EPM Architecture & Anaplan Solutions",
    desc: "Model building, optimisation, and administration. CloudWorks automation, API integrations, and migration from legacy EPM tools to modern architectures.",
    tags: ["Anaplan", "CloudWorks", "Model Building", "API Integration"],
  },
  {
    icon: "💰",
    title: "Commission System Design",
    desc: "End-to-end commission calculation and management systems — replacing spreadsheets and manual processes with automated, auditable, transparent platforms.",
    tags: ["Commission Logic", "Role-Based Access", "Audit Trails", "Export"],
  },
  {
    icon: "🎓",
    title: "AI Training & Token Optimisation",
    desc: "Train your team to leverage AI effectively. Implement token management strategies that have saved clients ~$500K in AI infrastructure costs.",
    tags: ["Training", "Cost Optimisation", "Token Management", "ROI"],
  },
  {
    icon: "📈",
    title: "FP&A Consulting & Decision Support",
    desc: "Revenue forecasting, NRR cohort analysis, pipeline performance, scenario modelling, and board-ready reporting. Strategic finance support that moves the needle.",
    tags: ["Forecasting", "NRR Analysis", "Board Decks", "Scenario Planning"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--bg-darker)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6366F1] mb-3">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            What I Can Build For You
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            From strategic consulting to production-grade software — everything your finance
            team needs to operate at the next level.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover group rounded-xl bg-[var(--bg-dark)] border border-[var(--border-light)] p-8 flex flex-col"
            >
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-[var(--text-primary)] font-bold text-xl mb-3 group-hover:text-[#6366F1] transition-colors">
                {s.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--tag-bg)] text-[var(--tag-text)] border border-[var(--tag-border)]"
                  >
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
