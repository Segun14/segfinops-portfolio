const expertise = [
  {
    category: "Enterprise Performance Management",
    skills: [
      { name: "Anaplan", level: 95 },
      { name: "Model Architecture", level: 90 },
      { name: "CloudWorks Automation", level: 85 },
      { name: "REST API Integration", level: 92 },
    ],
  },
  {
    category: "Programming & Engineering",
    skills: [
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "Python", level: 88 },
      { name: "SQL & Data Modelling", level: 90 },
      { name: "Next.js / React", level: 90 },
    ],
  },
  {
    category: "Finance & Analysis",
    skills: [
      { name: "FP&A / Financial Planning", level: 95 },
      { name: "Revenue Forecasting & NRR", level: 92 },
      { name: "Commission System Design", level: 95 },
      { name: "Board Reporting & Decks", level: 88 },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Agentic AI / LLM Integration", level: 90 },
      { name: "Multi-Agent Architectures", level: 88 },
      { name: "Workflow Automation", level: 92 },
      { name: "AI Token Optimisation", level: 85 },
    ],
  },
];

const tools = [
  "Anaplan", "Salesforce", "Power BI", "Google Workspace",
  "PostgreSQL", "Next.js", "React", "Node.js",
  "Python", "Docker", "Kubernetes", "Git",
  "Slack API", "REST APIs", "Tailwind CSS", "Vercel",
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-padding bg-[var(--bg-darker)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6366F1] mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Modules & Technologies</h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">A rare blend of finance domain expertise and engineering capability.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full mx-auto mt-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertise.map((cat) => (
            <div key={cat.category} className="rounded-xl bg-[var(--bg-dark)] border border-[var(--border-light)] p-8">
              <h3 className="text-[var(--text-primary)] font-bold text-lg mb-6">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[var(--text-muted)]">{skill.name}</span>
                      <span className="text-sm text-[#6366F1] font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg-surface)]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4]" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-[var(--text-primary)] font-bold text-xl mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-5 py-2.5 rounded-full bg-[var(--bg-dark)] border border-[var(--border-light)] text-[var(--text-muted)] text-sm hover:border-[#6366F1]/50 hover:text-[var(--text-primary)] transition-colors cursor-default">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
