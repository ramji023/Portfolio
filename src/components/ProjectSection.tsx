import ProjectCard from "./ProjectCard";
import { projects } from "../projects/Projects";

export default function ProjectSection() {
  return (
    <section
    id="projects"
    className="px-15 py-10">
      <div className="flex items-center gap-2 py-5">
        <h2 className="text-3xl font-bold whitespace-nowrap">
          <span className="text-text-other/80">01.</span>Things I’ve Built
        </h2>

        {/*straight line */}
        <div className="h-px w-full bg-text-muted"></div>
      </div>

      {/* Simple vertical stack */}
      <div className="mt-10 space-y-6 scroll-smooth">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* <div className="flex justify-center mt-15 ">
        <button
          onClick={() => navigate("work")}
          className="flex items-center gap-2 cursor-pointer rounded-md text- px-4 py-2 text-btn-primary-text border-border-DEFAULT bg-btn-primary hover:bg-btn-primary-hover hover:scale-[1.02] "
        >
          Show More Projects <ArrowUpRight className="w-5 h-5" />
        </button>
      </div> */}
    </section>
  );
}
