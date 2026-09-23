import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="space-y-3.5 text-sm sm:text-[14.5px] leading-relaxed text-[var(--text-secondary)] font-normal">
      <p>
        <strong className="text-[var(--text-primary)] font-semibold">
          Full-stack developer, founder, and builder.
        </strong>{" "}
        Currently building intelligent AI agents, real-time sync engines, and full-stack systems at{" "}
        <a
          href="https://github.com/ramji023"
          target="_blank"
          rel="noreferrer"
          className="dada-link text-[var(--text-primary)] font-medium inline-flex items-center gap-0.5"
        >
          Airwix Technologies
          <ArrowUpRight className="w-3.5 h-3.5 inline text-[var(--text-muted)]" />
        </a>
        .
      </p>

      <p>
        I love crafting products end-to-end — from responsive, accessible user interfaces with{" "}
        <span className="text-[var(--text-primary)]">React</span>,{" "}
        <span className="text-[var(--text-primary)]">TypeScript</span>, and{" "}
        <span className="text-[var(--text-primary)]">Tailwind</span> to scalable, low-latency backends in{" "}
        <span className="text-[var(--text-primary)]">Node.js</span>,{" "}
        <span className="text-[var(--text-primary)]">WebSockets</span>, and{" "}
        <span className="text-[var(--text-primary)]">PostgreSQL</span>.
      </p>

      <p>
        When I'm not shipping code, I explore modern web engineering patterns, contribute to open-source, and build{" "}
        <Link to="/projects" className="dada-link text-[var(--text-primary)] font-medium">
          side projects
        </Link>
        .
      </p>
    </section>
  );
}
