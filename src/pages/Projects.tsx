import { useState } from "react";
import { projects } from "../projects/Projects";
import { type Project } from "../projects/Projects";
import { motion } from "motion/react";
import { techIcons } from "../projects/techIcons";
import { ArrowRight, ChevronLeft, ChevronRight, Link } from "lucide-react";

export default function Projects() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-extrabold text-neutral-800 tracking-[-0.08em]">
          My Projects
        </h2>
        <p className="mt-3 text-lg text-neutral-700 tracking-[-0.03em]">
          A collection of work I’ve built — frontend, backend, real-time
          systems, and more. Each project reflects my focus on performance,
          scalability, and clean design. From idea to deployment, these works
          showcase practical problem-solving and modern development practices.
        </p>
        <div className="p-2 mt-10 flex flex-col gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [project.image, ...(project.gallery || [])];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full p-6 transition-all duration-300 tracking-[-0.03em]"
    >
      {/* STATUS BADGE */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-3xl font-bold">{project.title}</h3>
        <span className="text-neutral-500 tracking-[0.03em]">
          {project.date}
        </span>
      </div>

      {/* PROJECT DESCRIPTION */}
      <div className="mb-6">
        <p className="text-slate-600 leading-relaxed text-lg">
          {project.description}
        </p>
      </div>

      {/* IMAGE CAROUSEL */}
      <div className="mb-6">
        <div className="relative overflow-hidden group  p-3 bg-white">
          <img
            src={allImages[currentImage]}
            alt={`${project.title} ${currentImage + 1}`}
            className="w-full h-full object-fit"
          />

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {allImages.length}
            </div>
          )}

          {/* Thumbnail Navigation */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TECH STACK */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <div
              key={tech}
              className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md border border-black/10 hover:bg-black/5 transition-colors duration-200"
            >
              <i className={`${techIcons[tech]} text-2xl`}></i>
              <span className="text-sm text-neutral-600 font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTONS - FULL WIDTH */}
      <div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white shadow-md hover:scale-[1.02] transition-transform"
          >
            <Link className="w-5 h-5" />
            View Live
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border"
          >
            <i
              className={`${techIcons["GitHub"]} text-2xl text-neutral-800`}
            ></i>
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
}
