const projects = [
  {
    title: "Commission Intelligence Platform",
    category: "Commission Operations",
    summary:
      "A controlled, self-service commission experience for finance, sales leaders, managers, and account executives.",
    challenge:
      "Commission data was distributed through spreadsheets, creating repeated questions, version-control issues, and significant reconciliation work for finance.",
    solution:
      "Built role-based dashboards, automated Anaplan data sync, dynamic filtering, exports, and an audit trail that makes every payout easier to review and explain.",
    value:
      "More than 75 sales users can access the right level of detail directly, while finance retains control over calculations, adjustments, and final payout approval.",
    tech: ["Next.js", "PostgreSQL", "Anaplan API", "Kubernetes"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Sales Performance Intelligence Bot",
    category: "Revenue Intelligence",
    summary:
      "A Slack-native analytics assistant that turns governed sales data into clear, decision-ready answers.",
    challenge:
      "Pipeline, account ownership, close-rate, and performance questions required analysts to pull data manually from several systems before leadership could act.",
    solution:
      "Connected Salesforce and planning data to a conversational interface with defined business logic, scheduled summaries, and alerts for material changes.",
    value:
      "Sales and finance leaders get consistent answers in the tools they already use, reducing repetitive reporting and shortening the path from question to action.",
    tech: ["TypeScript", "Slack API", "Salesforce", "PostgreSQL"],
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Headcount Planning Platform",
    category: "Planning & Forecasting",
    summary:
      "A governed planning application for workforce costs, movements, scenarios, and long-range forecasts.",
    challenge:
      "Roster data, compensation changes, transfers, hiring plans, foreign exchange, and forecast assumptions lived in disconnected files with limited traceability.",
    solution:
      "Created validated uploads, effective-dated changes, scenario modelling, departmental rollups, movement bridges, and employee-level drilldowns.",
    value:
      "Planners can reconcile current workforce costs, test future decisions, and trace company-level changes back to the employees and assumptions driving them.",
    tech: ["Next.js", "PostgreSQL", "Financial Modelling", "AI Analysis"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "FP&A Co-Pilot Agent",
    category: "AI & Automation",
    summary:
      "An operating layer that helps finance monitor workflows, investigate exceptions, and coordinate recurring work.",
    challenge:
      "Critical finance activity was spread across email, calendars, CRM, planning tools, shared drives, scheduled jobs, and manual follow-ups.",
    solution:
      "Built a multi-agent assistant with persistent context, tool integrations, workflow monitoring, and clear guardrails around sensitive data and external actions.",
    value:
      "The agent surfaces issues earlier, keeps operational context connected, and accelerates analysis while controlled calculations and approvals remain deterministic.",
    tech: ["TypeScript", "AI/LLM", "Google Workspace", "Slack"],
    color: "from-emerald-500 to-teal-500",
  },
];

const additionalWork = [
  "Revenue and NRR analysis for management reporting",
  "Anaplan integrations and scheduled data workflows",
  "Board reporting models and executive dashboards",
  "Automated finance data pipelines and controls",
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-[-0.02em] mb-4">
            Finance problems, rebuilt as systems
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Each project began with a recurring operating problem and was built
            around clearer controls, faster answers, and better decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-7 md:p-8">
                <span className="text-accent text-[0.6875rem] font-semibold uppercase tracking-[0.08em] block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-[-0.01em] group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="space-y-5 border-t border-border pt-6">
                  <div>
                    <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-text-muted mb-1.5">
                      Challenge
                    </p>
                    <p className="text-text-secondary text-[0.8125rem] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-text-muted mb-1.5">
                      What I built
                    </p>
                    <p className="text-text-secondary text-[0.8125rem] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-emerald mb-1.5">
                      Business value
                    </p>
                    <p className="text-text-secondary text-[0.8125rem] leading-relaxed">
                      {project.value}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="text-[0.6875rem] font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-bg-secondary border border-border rounded-2xl p-8 md:p-10">
          <h3 className="text-[0.75rem] font-semibold text-text-muted uppercase tracking-[0.12em] mb-6">
            Additional Work
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {additionalWork.map((item) => (
              <div key={item} className="flex gap-3 text-text-secondary text-[0.875rem] leading-relaxed">
                <span className="text-accent font-bold">→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
