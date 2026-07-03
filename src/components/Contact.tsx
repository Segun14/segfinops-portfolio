export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="section-divider mb-16 md:mb-20" />

        <div className="md:grid md:grid-cols-5 md:gap-16">
          {/* Left side — 2 cols */}
          <div className="md:col-span-2 mb-12 md:mb-0">
            <span className="tag-badge mb-5">Contact</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-[-0.02em] mb-5">
              Let&apos;s talk
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 text-[0.9375rem]">
              Have a finance automation challenge? A commission system that needs
              fixing? Want to see what AI can actually do for your team?
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-1.5">
                  Email
                </span>
                <a
                  href="mailto:segunodunlade2014@gmail.com"
                  className="text-text-primary hover:text-accent transition-colors text-sm"
                >
                  segunodunlade2014@gmail.com
                </a>
              </div>

              <div>
                <span className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-1.5">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/oluwasegun-odunlade-b71484175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors text-sm"
                >
                  Oluwasegun Odunlade
                </a>
              </div>

              <div>
                <span className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-1.5">
                  Location
                </span>
                <span className="text-text-secondary text-sm">
                  Remote — Lagos, Nigeria (GMT+1)
                </span>
              </div>
            </div>
          </div>

          {/* Right side — 3 cols */}
          <div className="md:col-span-3">
            <div className="card-elevated p-6 md:p-8">
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
                      className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="body"
                    className="text-text-muted text-[0.6875rem] uppercase tracking-[0.15em] block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
