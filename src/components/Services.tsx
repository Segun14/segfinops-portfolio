const capabilities = [
  {
    label: "Finance Systems",
    title: "Operational applications",
    text: "Commission management, planning workflows, reporting portals, controlled adjustments, approvals, and audit-ready evidence.",
    tags: ["Product design", "Data models", "Workflow controls"],
    color: "bg-violet-500",
  },
  {
    label: "Automation",
    title: "Connected finance workflows",
    text: "APIs, scheduled syncs, exception monitoring, data pipelines, and integrations across CRM, EPM, reporting, and collaboration tools.",
    tags: ["APIs", "Data pipelines", "Monitoring"],
    color: "bg-cyan-400",
  },
  {
    label: "Planning",
    title: "Decision-support models",
    text: "Driver-based forecasts, workforce planning, revenue and margin analysis, scenario design, and executive-ready decision narratives.",
    tags: ["Forecasting", "Scenario planning", "FP&A"],
    color: "bg-amber-400",
  },
  {
    label: "AI Systems",
    title: "Governed intelligence",
    text: "Finance co-pilots, conversational BI, anomaly detection, and agent workflows with human approval and deterministic calculations.",
    tags: ["AI agents", "Conversational BI", "Guardrails"],
    color: "bg-rose-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#f4f7fb] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-title mt-4">I bridge the gap between finance requirements and shipped technology.</h2>
          <p className="section-copy mx-auto mt-5">That means I can challenge the business logic, structure the data, shape the user experience, and work through implementation.</p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 md:p-8">
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${capability.color}`} />
                <span className="text-[0.625rem] font-black uppercase tracking-[0.15em] text-slate-400">{capability.label}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{capability.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {capability.tags.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
