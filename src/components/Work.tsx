import {
  CommissionPreview,
  CopilotPreview,
  HeadcountPreview,
  SalesBotPreview,
} from "./ProductMockups";

const projects = [
  {
    id: "commission-platform",
    number: "01",
    eyebrow: "Commission Operations",
    title: "Commission Intelligence Platform",
    statement: "From spreadsheet distribution to a controlled, self-service payout experience.",
    challenge:
      "Commission results were difficult to distribute, explain, and trace across finance, sales leaders, managers, and account executives.",
    build:
      "A role-aware platform with automated planning-data sync, detailed payout views, exports, adjustments, and audit history.",
    value:
      "More than 75 users receive the right level of visibility while finance retains control over calculations and approval.",
    tags: ["Next.js", "PostgreSQL", "Anaplan API", "Kubernetes"],
    preview: <CommissionPreview />,
    accent: "violet",
  },
  {
    id: "sales-intelligence",
    number: "02",
    eyebrow: "Revenue Intelligence",
    title: "Sales Performance Intelligence Bot",
    statement: "Governed pipeline and performance answers, delivered directly inside Slack.",
    challenge:
      "Leadership questions required analysts to pull current and historical data manually from several systems before anyone could act.",
    build:
      "A conversational analytics layer over CRM and planning data with defined business logic, scheduled summaries, and material-change alerts.",
    value:
      "Finance and sales leaders get faster, more consistent answers without creating another dashboard to learn.",
    tags: ["TypeScript", "Slack API", "Salesforce", "PostgreSQL"],
    preview: <SalesBotPreview />,
    accent: "cyan",
  },
  {
    id: "headcount-planning",
    number: "03",
    eyebrow: "Planning & Forecasting",
    title: "Headcount Planning Platform",
    statement: "A governed workforce planning system built around movements, scenarios, and traceability.",
    challenge:
      "Roster data, compensation changes, hiring plans, transfers, foreign exchange, and forecast assumptions lived in disconnected files.",
    build:
      "Validated uploads, effective-dated changes, scenario modelling, departmental rollups, workforce bridges, and employee-level drilldowns.",
    value:
      "Planners can reconcile current costs, test future decisions, and trace consolidated movement back to its underlying drivers.",
    tags: ["Next.js", "PostgreSQL", "Financial Modelling", "AI Analysis"],
    preview: <HeadcountPreview />,
    accent: "amber",
  },
  {
    id: "fpa-copilot",
    number: "04",
    eyebrow: "AI & Automation",
    title: "FP&A Co-Pilot Agent",
    statement: "An operating layer for monitoring workflows, investigating exceptions, and keeping finance work connected.",
    challenge:
      "Important finance activity was spread across email, calendars, CRM, planning tools, shared drives, scheduled jobs, and manual follow-ups.",
    build:
      "A multi-agent assistant with persistent context, tool integrations, workflow monitoring, and explicit controls for sensitive or external actions.",
    value:
      "Issues surface earlier, operating context stays connected, and analysis moves faster without handing deterministic calculations to AI.",
    tags: ["TypeScript", "AI/LLM", "Google Workspace", "Slack"],
    preview: <CopilotPreview />,
    accent: "coral",
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-[#f4f7fb] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Selected systems</span>
          <h2 className="section-title mt-4">Built from real finance problems—not theoretical product briefs.</h2>
          <p className="section-copy mx-auto mt-5">
            Each case study combines financial control, thoughtful product design,
            and practical engineering. Product visuals below use fictional names
            and dummy figures to protect confidential information.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article id={project.id} key={project.id} className="scroll-mt-28">
              <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="flex items-center gap-4">
                    <span className={`project-number project-number-${project.accent}`}>{project.number}</span>
                    <span className="text-[0.6875rem] font-black uppercase tracking-[0.16em] text-slate-500">{project.eyebrow}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-4xl">{project.title}</h3>
                  <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-700">{project.statement}</p>

                  <div className="mt-8 space-y-5">
                    {[
                      ["The problem", project.challenge],
                      ["What I built", project.build],
                      ["Business value", project.value],
                    ].map(([label, text]) => (
                      <div key={label} className="grid gap-1 border-l-2 border-slate-200 pl-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                        <p className="text-[0.625rem] font-black uppercase tracking-[0.13em] text-slate-400">{label}</p>
                        <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}
                  </div>
                </div>

                <div>{project.preview}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
