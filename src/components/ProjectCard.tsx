import { type Project } from "../projects/Projects";
import { motion } from "motion/react";
import { techIcons } from "../projects/techIcons";
import { Eye } from "lucide-react";

const statusColors: Record<string, string> = {
  "In Progress": "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  Completed: "bg-green-500/20 text-green-500 border-green-500/30",
  "Under Development": "bg-blue-500/20 text-blue-500 border-blue-500/30",
  Paused: "bg-red-500/20 text-red-500 border-red-500/30",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 backdrop-blur-sm rounded-xl p-6 shadow-xl transition-all duration-300"
    >
      {/* LEFT SIDE — IMAGE + GALLERY */}
      <div className="flex flex-col gap-2 h-full">
        {/* Main Image */}
        <div className="relative flex-1 rounded-lg overflow-hidden min-h-[300px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Gallery Grid (no scroll) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative h-24 rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between gap-4">
        {/* STATUS BADGE */}
        <div className="flex flex-row-reverse">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold ">{project.title}</h3>
          <p className="text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-2 py-1 rounded-md border border-black/10 hover:bg-black/5"
              >
                <i className={`${techIcons[tech]} text-2xl`}></i>
                <span className="text-sm text-neutral-500">{tech}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-slate-900">
              Key Features:
            </h4>
            <ol className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-slate-600"
                >
                  <span className="mt-0.5 text-indigo-500">➤</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-200 border rounded-lg transition-colors duration-300 font-medium"
            >
              <i className={`${techIcons["Github"]} text-2xl`}></i>
              <span>GitHub</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-300 text-white font-medium"
            >
              Live Demo <Eye className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
