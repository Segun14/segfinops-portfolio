const projects = [
  {
    tag: "Flagship",
    title: "Commission Intelligence Platform",
    description:
      "Our finance team spent 4 days every month processing commissions in spreadsheets. I built a full-stack platform — Next.js, PostgreSQL, Anaplan REST API — that does it in 5 minutes. 75+ AEs, role-based dashboards, real-time data sync, full audit trail. Deployed on Kubernetes.",
    metrics: [
      { value: "4 days → 5 min", label: "Processing time" },
      { value: "$300K/yr", label: "Cost savings" },
      { value: "Zero", label: "Manual errors" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Anaplan API", "Kubernetes"],
  },
  {
    tag: "AI / Agents",
    title: "FP&A Co-Pilot Agent",
    description:
      "An AI agent that operates as a virtual finance controller. Persistent memory, connected to email, calendar, EPM tools, CRM, and communication platforms. It doesn\u2019t just answer questions — it proactively monitors metrics, flags anomalies, and coordinates specialised sub-agents for commissions, forecasting, and reporting.",
    metrics: [
      { value: "24/7", label: "Monitoring" },
      { value: "Multi-agent", label: "Architecture" },
      { value: "Force ×", label: "For FP&A team" },
    ],
    stack: ["TypeScript", "AI/LLM", "Multi-Agent Architecture", "REST APIs"],
  },
  {
    tag: "Conversational BI",
    title: "Sales Performance Intelligence Bot",
    description:
      "Sales leadership needed answers about pipeline health and rep performance. Every question meant waiting for an analyst. I built a Slack bot that connects to our EPM, CRM, and revenue systems — leadership asks in plain English, gets formatted answers in seconds. Scheduled daily summaries and anomaly alerts included.",
    metrics: [
      { value: "60–70%", label: "Fewer ad-hoc requests" },
      { value: "Seconds", label: "Response time" },
      { value: "Proactive", label: "Risk detection" },
    ],
    stack: ["TypeScript", "Slack API", "Salesforce", "Anaplan API"],
  },
  {
    tag: "From Scratch",
    title: "Revenue Engine ($0 → $20K MRR)",
    description:
      "Designed and built the complete revenue infrastructure for an early-stage company — pricing architecture, billing systems, sales tracking, financial dashboards, forecasting models. Built the analytical foundation that supported growth from nothing to $20K+ monthly recurring revenue.",
    metrics: [
      { value: "$0 → $20K+", label: "MRR growth" },
      { value: "End-to-end", label: "Finance infra" },
    ],
    stack: ["Financial Modelling", "BI Dashboards", "Billing Systems", "Forecasting"],
  },
];

const moreWork = [
  "FP&A Data Automation Engine",
  "Commission Calculation System",
  "Anaplan Solutions Portfolio",
  "FinSight",
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-xl">
          <span className="tag-badge mb-5">Selected work</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-[-0.02em] mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Each project started with a real problem I faced on the job.
            No theoretical exercises — just solutions that ship.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <article key={i} className="card-elevated p-6 md:p-8 lg:p-10">
              {/* Top row: tag + stack */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="tag-badge text-[0.625rem]">{project.tag}</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-text-muted text-[0.6875rem] bg-bg-tertiary border border-border px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary tracking-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-6 max-w-3xl">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="impact-pill">
                    <span className="font-semibold">{m.value}</span>
                    <span className="text-text-muted text-xs">— {m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* More work */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted text-sm">
            Also:{" "}
            {moreWork.map((item, i) => (
              <span key={item}>
                <span className="text-text-secondary hover:text-accent transition-colors cursor-default">
                  {item}
                </span>
                {i < moreWork.length - 1 && (
                  <span className="text-border-hover mx-2">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
