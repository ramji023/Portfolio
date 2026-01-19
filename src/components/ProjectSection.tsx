import ProjectCard from "./ProjectCard";
import { projects } from "../projects/Projects";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectSection() {
  const navigate = useNavigate();
  return (
    <section className="px-15 py-10">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-3 text-text-secondary max-w-xl">
        A collection of work I've built — frontend, backend, real-time systems,
        and more.
      </p>

      {/* Simple vertical stack */}
      <div className="mt-10 space-y-6 px-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="flex justify-center mt-15 ">
        <button
          onClick={() => navigate("work")}
          className="flex items-center gap-2 cursor-pointer rounded-md text- px-4 py-2 text-btn-primary-text border-border-DEFAULT bg-btn-primary hover:bg-btn-primary-hover hover:scale-[1.02] "
        >
          Show More Projects <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
