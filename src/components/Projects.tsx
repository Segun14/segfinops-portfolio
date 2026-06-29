import { projects } from "@/data/projects";
import { projects2 } from "@/data/projects2";
import type { Project } from "@/data/projects";

const allProjects: Project[] = [...projects, ...projects2];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card-hover rounded-2xl bg-[var(--bg-darker)] border border-[var(--border-light)] overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
      <div className="p-8 md:p-10">
        <div className="flex items-start gap-6 mb-8">
          <span className="project-number hidden md:block">{p.num}</span>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">{p.title}</h3>
            <p className="text-[#6366F1] font-medium">{p.subtitle}</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-rose-400 mb-3">The Problem</h4>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{p.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-3">What I Built</h4>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{p.solution}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-[#06B6D4] mb-3">Key Features</h4>
              <ul className="space-y-2">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="text-[#6366F1] mt-1 shrink-0">▸</span>{f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">Impact</h4>
              <ul className="space-y-2">
                {p.impact.map((imp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-primary)] font-medium">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>{imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--border-light)] flex flex-wrap gap-2">
          {p.stack.map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-light)]">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-dark)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6366F1] mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">What I&apos;ve Built</h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">Real solutions for real finance teams. Anonymised case studies with quantified impact.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full mx-auto mt-6" />
        </div>
        <div className="space-y-12">
          {allProjects.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
