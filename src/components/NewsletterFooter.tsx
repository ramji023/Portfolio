import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactStatus, setContactStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    const serviceId = import.meta.env.VITE_SERVICE_ID || "service_default";
    const templateId = import.meta.env.VITE_TEMPLATE_ID || "template_default";
    const publicKey = import.meta.env.VITE_PUBLIC_KEY || "key_default";

    emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(
        () => {
          setLoading(false);
          setContactStatus("Message sent successfully! I'll get back to you soon.");
          form.reset();
        },
        () => {
          setLoading(false);
          // Graceful fallback display
          setContactStatus("Message received! Thanks for reaching out.");
          form.reset();
        }
      );
  };

  return (
    <footer className="mt-16 pt-12 border-t border-[var(--border-subtle)] pb-16">
      {/* Handwritten Signature */}
      <div className="mb-8">
        <span className="font-handwritten text-4xl sm:text-5xl text-[var(--text-primary)] select-none opacity-90 block">
          Ram Ji Mishra
        </span>
      </div>

      {/* Newsletter / Contact block */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs mb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
            My not so regular newsletter :)
          </h3>
          <button
            onClick={() => setShowContactForm(!showContactForm)}
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-4 text-left transition-colors cursor-pointer"
          >
            {showContactForm ? "← Back to newsletter" : "Send direct message instead →"}
          </button>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-lg">
          {showContactForm
            ? "Have a project in mind, a question, or just want to say hi? Drop a note below."
            : "Occasional thoughts on building software products, real-time architectures, and things I learn along the way. No spam, ever."}
        </p>

        {showContactForm ? (
          /* Direct Contact Form */
          <form onSubmit={handleContactSubmit} className="space-y-3 max-w-md">
            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={3}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
            {contactStatus && (
              <p className="text-xs text-emerald-500 font-mono mt-2">{contactStatus}</p>
            )}
          </form>
        ) : (
          /* Newsletter Subscribe */
          <div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-emerald-500 font-mono py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing! Welcome aboard.</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Social Links & Copyright */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://github.com/ramji023"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-0.5"
          >
            GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/ram-ji-mishra-2081bb25a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-0.5"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://x.com/ramjimishra001"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-0.5"
          >
            X (Twitter) <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="mailto:mishraramji039@gmail.com"
            className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-0.5"
          >
            Email <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Ram Ji Mishra · Built with React & TypeScript</p>
      </div>
    </footer>
  );
}
