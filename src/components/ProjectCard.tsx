import { type Project } from "../projects/Projects";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative w-full py-8 md:py-16">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4">
        {/* IMAGE SIDE */}
        <div
          className={`
            lg:col-span-7
            ${isEven ? "lg:col-start-6" : "lg:col-start-1"}
          `}
        >
          <div className="relative overflow-hidden border border-border-other/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] md:h-[340px] object-cover opacity-80 hover:opacity-100 transition"
            />
            <div className="absolute inset-0 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* content overlapping */}
        <div
          className={`
            relative
            lg:absolute
            lg:max-w-md
            lg:top-1/2
            lg:-translate-y-1/2
            ${isEven ? "lg:left-0 text-left" : "lg:right-0 text-right"}
          `}
        >
          <p className="text-text-other/80 text-sm mb-1">Featured Project</p>

          <h3 className="text-3xl font-semibold mb-4 text-text-primary">
            {project.heading}
          </h3>

          <div className="bg-gray-900 p-6">
            <p className="text-text-secondary line-clamp-6 shadow-2xl text-md ">
              {project.description}
            </p>
          </div>

          <div
            className={`flex flex-row flex-wrap gap-x-4 mt-4 ${
              isEven ? "justify-start" : "justify-end"
            }`}
          >
            {project.tech.map((p) => (
              <span className="text-sm text-text-muted">{p}</span>
            ))}
          </div>

          {/* project links  */}
          <div
            className={`flex gap-6 mt-6 ${
              isEven ? "justify-start" : "justify-end"
            }`}
          >
            <a
              href={project.githubLink}
              target="_blank"
              className=" text-text-secondary hover:text-text-other hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href={project.liveLink}
              target="_blank"
              className="text-text-secondary hover:text-text-other hover:scale-110 transition"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
