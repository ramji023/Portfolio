import { skills } from "../projects/skills.ts";
import { techIcons } from "../projects/techIcons";

export default function SkillsSection() {
  return (
    <section
    id="skills"
    className="px-15 py-10">
      <div className="flex items-center gap-2 py-5">
        <h2 className="text-3xl font-bold whitespace-nowrap">
          <span className="text-text-other/80">02.</span> Technologies and tools
          I use frequently
        </h2>

        {/*straight line */}
        <div className="h-px w-full bg-text-muted"></div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="cursor-pointer flex items-center gap-4 px-4 py-2 text-text-primary bg-secondary-bg rounded-lg border border-border-DEFAULT hover:scale-[1.02] hover:border-border-other hover:text-text-other hover:bg-text-other/10 transition-transform "
          >
            <i className={`${techIcons[s]} text-2xl`}></i>
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
