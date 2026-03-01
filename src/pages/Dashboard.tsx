import Hero from "../components/HeroSection";
import Contact from "../components/Contact";
import SkillsSection from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import { Github, Linkedin, Twitter } from "lucide-react";
import Experience from "../components/Experience";
export default function Dashboard() {
  return (
    <>
      <main className="pt-6">
        <div className="px-5 md:px-10 py-5">
          <Hero />
          <Experience />
          <ProjectSection />
          <SkillsSection />
          <Contact />
          <footer className="mt-12 py-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Ram - Built with React, TypeScript,
            Tailwind & Motion
          </footer>
        </div>

        <div className="hidden md:flex fixed bottom-0 left-2 md:left-10 flex-col justify-center items-center text-text-muted">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <a
              href="https://github.com/ramji023"
              target="_blank"
              className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ram-ji-mishra-2081bb25a/"
              target="_blank"
              className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/ramjimishra001"
              target="_blank"
              className="cursor-pointer hover:scale-110 w-7 h-7 rounded-full hover:text-text-other flex justify-center items-center"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <div className="w-px h-60 bg-text-muted mt-2"></div>
        </div>

        <div className="hidden fixed bottom-0 right-2 md:right-10 md:flex flex-col justify-center items-center text-text-muted">
          <div className="flex flex-col justify-center items-center gap-8 ">
            <a
              href="mailto:mramji747@gmail.com"
              className="
        text-sm tracking-widest
        [writing-mode:vertical-rl]
        hover:text-text-other
        transition
      "
            >
              mishraramji039@gmail.com
            </a>
          </div>
          <div className="w-px h-60 bg-text-muted mt-2"></div>
        </div>
      </main>
    </>
  );
}
