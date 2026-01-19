import { useNavigate } from "react-router-dom";
import { type Project } from "../projects/Projects";
import { ExternalLink, Eye } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  return (
    <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 border border-border-DEFAULT hover:border-accent h-80">
      <div className="flex h-full">
        {/* Image on left */}
        <div className="w-1/2 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content on right */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2 tracking-tight line-clamp-2 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-sky-400">
              {project.title}
            </h3>
            <p className="text-text-secondary text-md leading-relaxed mb-4 line-clamp-5">
              {project.description}
            </p>
          </div>

          <div className="flex gap-7 mt-4">
            <button
              onClick={() => navigate("work")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-md bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover shadow-md hover:scale-[1.02] transition-all"
            >
              More Details
              <Eye className="w-4 h-4" />
            </button>
            <a
              href={project.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-primary hover:bg-surface hover:border-accent shadow-md hover:scale-[1.02] transition-all"
            >
              View Live
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
