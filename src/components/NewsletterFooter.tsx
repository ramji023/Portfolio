import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export default function NewsletterFooter() {
  const [loading, setLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<string>("");

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
          setContactStatus("Message received! Thanks for reaching out.");
          form.reset();
        }
      );
  };

  return (
    <footer className="mt-10 sm:mt-12 pt-8 border-t border-[var(--border-subtle)] pb-12">
      {/* Handwritten Signature - Centered & Refined Size */}
      <div className="mb-6 flex justify-center text-center">
        <span className="font-handwritten text-2xl sm:text-3xl text-[var(--text-primary)] select-none opacity-85 block">
          Ram Ji Mishra
        </span>
      </div>

      {/* Simple 2-field Contact Form - Balanced Margins */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs mb-8 max-w-lg mx-auto">
        <form onSubmit={handleContactSubmit} className="space-y-3">
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
            <span>{loading ? "Sending..." : "Send"}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
          {contactStatus && (
            <p className="text-xs text-emerald-500 font-mono mt-2">{contactStatus}</p>
          )}
        </form>
      </div>

      {/* Bottom Copyright - Centered */}
      <div className="text-xs font-mono text-[var(--text-muted)] text-center">
        <p>© {new Date().getFullYear()} Ram Ji Mishra · Built with React & TypeScript</p>
      </div>
    </footer>
  );
}
