import React, { useEffect, useState } from "react";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { ProjectItem } from "../data/ProjectsData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allImages = [project.image, ...(project.gallery || [])];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 rounded-xl bg-[var(--bg-secondary)] shrink-0 flex items-center justify-center">
            {project.icon.startsWith("http") ? (
              <img
                src={project.icon}
                alt={`${project.name} logo`}
                className="w-7 h-7 object-contain"
              />
            ) : (
              <span className="text-2xl">{project.icon}</span>
            )}
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-mono">
              {project.role} · {project.year}
            </p>
          </div>
        </div>

        {/* Image Gallery Showcase */}
        {allImages.length > 0 && (
          <div className="relative my-4 rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5">
            <img
              src={allImages[activeImageIndex]}
              alt={`${project.name} preview`}
              className="w-full h-64 sm:h-80 object-cover object-top transition-all duration-300"
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous preview image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next preview image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeImageIndex === i ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Highlights & Architecture
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Badges */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <span>Visit Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-medium text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
