import ProjectCard from "./ProjectCard";
import { projects } from "../projects/Projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-3 text-slate-600 max-w-xl">
        A collection of work I’ve built — frontend, backend, real-time systems,
        and more.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
