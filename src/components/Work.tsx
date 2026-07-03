const projects = [
  {
    title: "Commission Intelligence Platform",
    category: "Finance Application",
    description:
      "Full-stack commission management system with role-based dashboards, dynamic filtering, automated Anaplan data sync, and multi-format export. Used by 75+ sales reps and managers.",
    impact: [
      "80% reduction in commission query resolution time",
      "Eliminated manual spreadsheet distribution",
      "Real-time self-service access for all reps",
    ],
    tech: ["Next.js", "PostgreSQL", "Anaplan API", "Tailwind CSS"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "FP&A Co-Pilot Agent",
    category: "AI & Automation",
    description:
      "AI-powered assistant deployed across Slack, handling FP&A queries, Salesforce pipeline analysis, commission calculations, and automated reporting. Processes natural language requests across multiple data sources.",
    impact: [
      "Automated daily Salesforce report sync",
      "Instant pipeline analysis on demand",
      "Connected Anaplan, Gmail, and Drive APIs",
    ],
    tech: ["Node.js", "Anthropic API", "Salesforce", "Slack"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Revenue Engine — SaaS Product",
    category: "Product & Entrepreneurship",
    description:
      "Commission management SaaS product built from enterprise learnings. Multi-tenant architecture, Stripe billing, PostgreSQL backend, and full admin/rep separation with domain-level routing.",
    impact: [
      "$0 → $20K MRR product trajectory",
      "Multi-tenant enterprise architecture",
      "Stripe-integrated billing & onboarding",
    ],
    tech: ["Next.js", "PostgreSQL", "Stripe", "Vercel"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Sales Performance Intelligence Bot",
    category: "AI & Automation",
    description:
      "Slack-native bot providing real-time revenue intelligence — Salesforce account ownership lookups, upcharge failure analysis, cancellation tracking, and shortfall alerts.",
    impact: [
      "Replaced 15+ manual report requests per week",
      "Automated monthly commission variance alerts",
      "Cross-platform data aggregation",
    ],
    tech: ["Python", "Salesforce API", "Slack Webhooks"],
    color: "from-sky-500 to-blue-500",
  },
];

const additionalWork = [
  "NRR Cohort Analysis — Excel workbook architecture for board reporting",
  "Revenue Mix Visualization — FY21–FY26F segmented analysis",
  "CloudWorks Automation — Anaplan scheduled data integrations",
  "Forecasting Models — ML-based revenue prediction pipelines",
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-[-0.02em] mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From enterprise commission systems to AI agents — here&apos;s what happens when
            a finance person learns to code.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <span className="text-accent text-[0.6875rem] font-semibold uppercase tracking-[0.08em] block mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-[-0.01em] group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-[0.875rem] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Impact */}
                <ul className="space-y-2 mb-6">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.8125rem] text-text-secondary leading-relaxed">
                      <svg className="w-4 h-4 text-emerald mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.6875rem] font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional work */}
        <div className="mt-10 bg-bg-secondary border border-border rounded-2xl p-8 md:p-10">
          <h3 className="text-[0.75rem] font-semibold text-text-muted uppercase tracking-[0.12em] mb-6">
            Also Delivered
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
