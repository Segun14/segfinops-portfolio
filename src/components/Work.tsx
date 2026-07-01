const projects = [
  {
    tag: "Flagship Product",
    title: "Commission Intelligence Platform",
    description:
      "Our finance team spent 4 days every month processing commissions in spreadsheets. I built a full-stack platform — Next.js, PostgreSQL, Anaplan REST API — that does it in 5 minutes. 75+ AEs, role-based dashboards, real-time data sync, full audit trail. Deployed on Kubernetes.",
    impact: "4 days → 5 minutes · $300K/yr saved · Zero manual errors",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Anaplan API", "Kubernetes"],
  },
  {
    tag: "AI/Agents",
    title: "FP&A Co-Pilot Agent",
    description:
      "An AI agent that operates as a virtual finance controller. Persistent memory, connected to email, calendar, EPM tools, CRM, and communication platforms. It doesn't just answer questions — it proactively monitors metrics, flags anomalies, and coordinates specialised sub-agents for commissions, forecasting, and reporting.",
    impact:
      "24/7 monitoring · Institutional knowledge captured · Force multiplier for entire FP&A function",
    stack: ["TypeScript", "AI/LLM", "Multi-Agent Architecture", "REST APIs"],
  },
  {
    tag: "Conversational BI",
    title: "Sales Performance Intelligence Bot",
    description:
      "Sales leadership needed answers about pipeline health and rep performance. Every question meant waiting for an analyst. I built a Slack bot that connects to our EPM, CRM, and revenue systems — leadership asks in plain English, gets formatted answers in seconds. Scheduled daily summaries and anomaly alerts included.",
    impact:
      "Seconds instead of days · 60-70% fewer ad-hoc requests · Proactive risk detection",
    stack: ["TypeScript", "Slack API", "Salesforce", "Anaplan API"],
  },
  {
    tag: "From Scratch",
    title: "Revenue Engine ($0 → $20K MRR)",
    description:
      "Designed and built the complete revenue infrastructure for an early-stage company — pricing architecture, billing systems, sales tracking, financial dashboards, forecasting models. Built the analytical foundation that supported growth from nothing to $20K+ monthly recurring revenue.",
    impact:
      "$0 → $20K+ MRR · Complete financial infrastructure from day one",
    stack: [
      "Financial Modelling",
      "BI Dashboards",
      "Billing Systems",
      "Forecasting",
    ],
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
    <section id="work" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase block mb-4">
            Selected work
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-tight">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`md:flex md:items-start md:gap-12 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-5/12 mb-6 md:mb-0">
                <span className="inline-block text-accent text-xs font-medium tracking-[0.15em] uppercase border border-accent-border bg-accent-muted px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-text-primary tracking-tight mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-text-muted text-xs border border-border px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-7/12 border-l border-border pl-6">
                <p className="text-text-secondary leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-accent text-sm font-medium">
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-text-muted text-sm">
            Also:{" "}
            {moreWork.map((item, i) => (
              <span key={item}>
                <span className="text-text-secondary">{item}</span>
                {i < moreWork.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
