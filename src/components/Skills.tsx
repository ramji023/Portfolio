import { skills } from "../projects/skills.ts";
import { techIcons } from "../projects/techIcons";

export default function SkillsSection() {
  return (
    <section className="px-15 py-10">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="mt-2 text-text-secondary">
        Technologies and tools I use frequently.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="cursor-pointer flex items-center gap-4 px-4 py-2 text-text-primary bg-secondary-bg rounded-lg border border-border-DEFAULT hover:scale-[1.02] transition-transform "
          >
            <i className={`${techIcons[s]} text-2xl`}></i>
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
