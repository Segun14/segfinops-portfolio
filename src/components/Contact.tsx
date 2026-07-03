export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-[0.75rem] font-semibold tracking-[0.12em] uppercase block mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-[-0.02em] mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a finance automation challenge or need a builder who understands
            both the numbers and the code? Let&apos;s talk.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Gradient top */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />

            <div className="p-8 md:p-12">
              <form
                action="mailto:segunodunlade2014@gmail.com"
                method="GET"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-text-primary text-[0.8125rem] font-semibold block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-glow transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-primary text-[0.8125rem] font-semibold block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-glow transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="text-text-primary text-[0.8125rem] font-semibold block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3.5 text-text-primary text-[0.9375rem] placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-glow transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold px-8 py-4 rounded-xl text-[0.875rem] hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto justify-center"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              {/* Contact info below form */}
              <div className="mt-10 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-1.5">
                    Email
                  </span>
                  <a
                    href="mailto:segunodunlade2014@gmail.com"
                    className="text-text-primary hover:text-accent transition-colors text-[0.875rem] font-medium"
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
                    className="text-text-primary hover:text-accent transition-colors text-[0.875rem] font-medium"
                  >
                    Oluwasegun Odunlade
                  </a>
                </div>
                <div>
                  <span className="text-text-muted text-[0.6875rem] font-semibold uppercase tracking-[0.12em] block mb-1.5">
                    Location
                  </span>
                  <span className="text-text-secondary text-[0.875rem]">
                    Lagos, Nigeria (GMT+1)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
