import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectsList, type ProjectItem } from "../data/ProjectsData";
import ProjectModal from "./ProjectModal";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="mt-6 mb-8 scroll-mt-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Work
        </h2>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          ({projectsList.length})
        </span>
      </div>

      {/* Projects List with compact, clean gap */}
      <div className="space-y-1.5">
        {projectsList.map((project) => {
          const isImgIcon = project.icon.startsWith("http");
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-2 px-2.5 -mx-2.5 rounded-xl hover:bg-[var(--bg-hover)] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 flex-wrap">
                {isImgIcon ? (
                  <img
                    src={project.icon}
                    alt={`${project.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <span className="text-base select-none shrink-0">{project.icon}</span>
                )}
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-sm sm:text-[15px] text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                    {project.name}
                  </span>
                  <span className="text-[var(--text-muted)] text-xs select-none">/</span>
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {project.tagline}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-1 sm:mt-0 shrink-0 pl-8 sm:pl-0">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {project.year}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
