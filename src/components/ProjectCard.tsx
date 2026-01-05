import { useNavigate } from "react-router-dom";
import { type Project } from "../projects/Projects";
import { ExternalLink, Eye, MoveUpRight } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white outline-neutral-600 outline group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-neutral-900 font-semibold mb-2 tracking-tight line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-600 text-md leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("work")}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white shadow-md hover:scale-[1.02] transition-transform"
          >
            More Details
            <Eye className="w-5 h-5" />
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border shadow-md hover:scale-[1.02] transition-transform"
          >
            View Live
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
