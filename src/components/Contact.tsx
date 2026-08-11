export default function Contact() {
  return (
    <section id="contact" className="contact-band scroll-mt-20 relative overflow-hidden py-24 md:py-32">
      <div className="hero-orb hero-orb-three" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <span className="inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-[0.6875rem] font-black uppercase tracking-[0.16em] text-violet-200">Let&apos;s connect</span>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-6xl">
          Need someone who understands the finance problem and can build the solution?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          I am open to conversations about finance systems, automation, product
          partnerships, founder opportunities, and complex FP&amp;A challenges.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:segunodunlade2014@gmail.com?subject=Finance%20systems%20conversation" className="button-primary justify-center">
            Email me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M22 6l-10 7L2 6"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/oluwasegun-odunlade-b71484175" target="_blank" rel="noopener noreferrer" className="button-ghost justify-center">
            Connect on LinkedIn
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3h8v8M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:grid-cols-3">
          <span>Lagos · GMT+1</span>
          <span>Finance · Product · Engineering</span>
          <span>Founder, PaidLens</span>
        </div>
      </div>
    </section>
  );
}
