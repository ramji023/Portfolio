import { skills } from "../projects/skills";
import { techIcons } from "../projects/techIcons";

export default function StackSection() {
  // Deduplicate any repeated skill names (e.g., Postgres / PostgreSQL)
  const uniqueSkills = Array.from(
    new Set(
      skills.map((s) => (s === "Postgres" ? "PostgreSQL" : s === "Node" ? "Node.js" : s))
    )
  );

  return (
    <section className="mt-8 mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Stack
        </h2>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          ({uniqueSkills.length})
        </span>
      </div>

      {/* Clean borderless container with premium colored tech badges */}
      <div className="flex flex-wrap gap-2">
        {uniqueSkills.map((skill) => {
          const iconClass =
            techIcons[skill] ||
            (skill === "WebSocket" ? "devicon-socketio-original" : "devicon-code-plain");
          return (
            <div
              key={skill}
              className="group inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] border border-[var(--border-subtle)] transition-all cursor-default"
            >
              <i
                className={`${iconClass} text-sm mr-1.5 transition-transform group-hover:scale-110`}
              />
              <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
