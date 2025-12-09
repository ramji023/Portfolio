import { skills } from "../projects/skills.ts";
import { techIcons } from "../projects/techIcons";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="mt-2 text-slate-600">
        Technologies and tools I use frequently.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="flex items-center gap-2 px-2 py-1 rounded-md border border-black/10 hover:bg-black/5"
          >
            <i className={`${techIcons[s]} text-2xl`}></i>
            <span className="text-sm text-neutral-500">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
