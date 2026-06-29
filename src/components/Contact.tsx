"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: "✉️",
    label: "Email",
    value: "segunodunlade2014@gmail.com",
    hreply_to: "mailto:segunodunlade2014@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/oluwasegun-odunlade-b71482175",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Remote — Africa/Lagos (GMT+1)",
    href: null,
  },
  {
    icon: "⏰",
    label: "Availability",
    value: "Open to engagements",
    hreply_to: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:segunodunlade2014@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--bg-dark)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#6366F1] mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Have a finance automation challenge? Need an EPM solution? Want to explore
            what Agentic AI can do for your team? Let&apos;s talk.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-[var(--text-primary)] font-bold text-xl mb-8">Get In Touch</h3>
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-[var(--text-dim)] mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-primary)] hover:text-[#6366F1] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--text-primary)]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="mt-10 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#06B6D4]/10 border border-[#6366F1]/30 p-8">
              <h4 className="text-[var(--text-primary)] font-bold text-lg mb-3">
                Typical Engagement Models
              </h4>
              <ul className="space-y-3 text-[var(--text-muted)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1]">▸</span>
                  <span><strong className="text-[var(--text-primary)]">Project-based</strong> — scoped deliverables with clear timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1]">▸</span>
                  <span><strong className="text-[var(--text-primary)]">Retainer</strong> — ongoing FP&A support and tool maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366F1]">▸</span>
                  <span><strong className="text-[var(--text-primary)]">Advisory</strong> — strategic consulting on finance tech architecture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl bg-[var(--bg-darker)] border border-[var(--border-light)] p-8">
            <h3 className="text-[var(--text-primary)] font-bold text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--text-muted)] mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-placeholder)] focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--text-muted)] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-placeholder)] focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[var(--text-muted)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-placeholder)] focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                  placeholder="Tell me about your project or challenge..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                {submitted ? "✓ Opening email client..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
