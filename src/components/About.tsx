export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-darker)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#6366F1] mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Finance meets engineering.</h2>
            <div className="space-y-4 text-[var(--text-muted)] text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-[var(--text-primary)] font-semibold">Segun Odunlade</span>, an FP&amp;A professional who writes code.
                Not a developer who learned finance — a <span className="text-[var(--text-primary)]">finance leader who builds production systems</span>.
              </p>
              <p>
                At a global CPaaS company, I&apos;ve transformed how the finance team operates — replacing
                manual spreadsheet processes with intelligent, automated platforms. From commission portals
                serving 75+ account executives to AI agents that function as virtual finance controllers.
              </p>
              <p>
                I believe the future of FP&amp;A is{" "}
                <span className="text-[#6366F1] font-semibold">engineering-driven</span>. The best finance
                teams won&apos;t just analyse data — they&apos;ll build the systems that analyse it for them.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏗️", title: "Builder", desc: "Full-stack finance applications — from database to deployment" },
              { icon: "🤖", title: "AI Architect", desc: "Multi-agent systems for autonomous finance operations" },
              { icon: "📊", title: "EPM Expert", desc: "Anaplan model builder — revenue, operating, commissions" },
              { icon: "⚡", title: "Automator", desc: "If it takes more than 5 minutes manually, I automate it" },
            ].map((card) => (
              <div key={card.title} className="card-hover rounded-xl bg-[var(--bg-dark)] border border-[var(--border-light)] p-6">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
