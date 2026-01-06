import ProjectCard from "./ProjectCard";
import { projects } from "../projects/Projects";
import { useNavigate } from "react-router-dom";

export default function ProjectSection() {
  const navigate = useNavigate();
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-3 text-slate-600 max-w-xl">
        A collection of work I've built — frontend, backend, real-time systems,
        and more.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className=" text-center mt-15 hover:scale-[1.02] hover:text-neutral-800">
        <button
          onClick={() => navigate("work")}
          className="text-lg px-3 py-1 bg-white rounded-md border border-slate-300 hover:bg-slate-50"
        >
          Show More Projects
        </button>
      </div>
    </section>
  );
}
