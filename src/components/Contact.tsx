export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:gap-16">
          {/* Left side */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-text-primary tracking-tight mb-6">
              Let&apos;s talk
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Have a finance automation challenge? A commission system that needs
              fixing? Want to see what AI can actually do for your team?
              I&apos;m based in Lagos (GMT+1) and available for consulting and
              contract work.
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-1">
                  Email
                </span>
                <a
                  href="mailto:segunodunlade2014@gmail.com"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  segunodunlade2014@gmail.com
                </a>
              </div>

              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-1">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/oluwasegun-odunlade-b71484175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Oluwasegun Odunlade
                </a>
              </div>

              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-1">
                  Location
                </span>
                <span className="text-text-secondary">
                  Remote &mdash; Lagos, Nigeria (GMT+1)
                </span>
              </div>
            </div>
          </div>

          {/* Right side — mailto form */}
          <div className="md:w-1/2">
            <form
              action="mailto:segunodunlade2014@gmail.com"
              method="GET"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-text-muted text-xs uppercase tracking-widest block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-bg-secondary border border-border rounded px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-border focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-text-muted text-xs uppercase tracking-widest block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-bg-secondary border border-border rounded px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-border focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="body"
                  className="text-text-muted text-xs uppercase tracking-widest block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={5}
                  className="w-full bg-bg-secondary border border-border rounded px-4 py-3 text-text-primary placeholder-text-muted focus:border-accent-border focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-bg-primary font-medium px-8 py-3 rounded text-sm transition-all duration-300 w-full md:w-auto cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
