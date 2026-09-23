import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data/ExperienceData";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="mt-6 mb-8 scroll-mt-12">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Experience
        </h2>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          ({experiences.length})
        </span>
      </div>

      <div className="space-y-1.5">
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              className="py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
            >
              <div
                onClick={() => toggleExpand(exp.id)}
                className="flex items-baseline justify-between cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-semibold text-sm sm:text-[15px] text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline text-[var(--text-muted)] text-xs">/</span>
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {exp.role}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {exp.period}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[var(--text-primary)]" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="mt-2.5 pt-2.5 border-t border-[var(--border-subtle)] text-xs sm:text-sm space-y-2 text-[var(--text-secondary)] animate-fade-in">
                  <ul className="space-y-1.5 list-disc list-inside">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
