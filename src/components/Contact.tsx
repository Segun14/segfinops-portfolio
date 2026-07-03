export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="md:grid md:grid-cols-12 md:gap-16">
          {/* Left — info */}
          <div className="md:col-span-5 mb-12 md:mb-0">
            <span className="text-accent text-[0.75rem] font-semibold tracking-[0.08em] uppercase block mb-3">
              Contact
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary tracking-[-0.02em] mb-5">
              Let&apos;s talk
            </h2>
            <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-10">
              Have a finance automation challenge? A commission system that needs
              fixing? Want to see what AI can actually do for your team?
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-1.5">
                  Email
                </span>
                <a
                  href="mailto:segunodunlade2014@gmail.com"
                  className="text-text-primary hover:text-accent transition-colors text-[0.9375rem] font-medium"
                >
                  segunodunlade2014@gmail.com
                </a>
              </div>

              <div>
                <span className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-1.5">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/oluwasegun-odunlade-b71484175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors text-[0.9375rem] font-medium"
                >
                  Oluwasegun Odunlade
                </a>
              </div>

              <div>
                <span className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-1.5">
                  Location
                </span>
                <span className="text-text-secondary text-[0.9375rem]">
                  Remote — Lagos, Nigeria (GMT+1)
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <div className="bg-bg-card border border-border rounded-xl p-8 md:p-10">
              <form
                action="mailto:segunodunlade2014@gmail.com"
                method="GET"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-text-inverse font-medium px-7 py-3.5 rounded-lg text-[0.875rem] hover:bg-accent-hover transition-colors"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
