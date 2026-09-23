import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projectsList, type ProjectItem } from "../data/ProjectsData";
import ProjectModal from "../components/ProjectModal";
import ThreeDotsDivider from "../components/ThreeDotsDivider";
import NewsletterFooter from "../components/NewsletterFooter";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <main className="max-w-2xl mx-auto">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Full-stack applications, real-time engines, and tools built with performance and design precision.
        </p>
      </div>

      {/* Projects Grid / Cards */}
      <div className="space-y-8">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden hover:border-[var(--border-strong)] transition-all shadow-xs"
          >
            {/* Project Image Preview */}
            <div
              onClick={() => setSelectedProject(project)}
              className="relative h-48 sm:h-64 overflow-hidden bg-black/5 dark:bg-white/5 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-mono text-white bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  Click to inspect details & gallery ↗
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2.5">
                    {project.icon.startsWith("http") ? (
                      <img
                        src={project.icon}
                        alt={`${project.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-xs"
                      />
                    ) : (
                      <span className="text-xl">{project.icon}</span>
                    )}
                    <h2
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:underline cursor-pointer"
                    >
                      {project.name}
                    </h2>
                  </div>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                    {project.tagline} · {project.year}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 pt-1 transition-colors cursor-pointer"
              >
                <span>View screenshots & highlights</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ThreeDotsDivider />
      <NewsletterFooter />
    </main>
  );
}
