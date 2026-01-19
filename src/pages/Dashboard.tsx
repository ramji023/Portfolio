import Hero from "../components/HeroSection";
import Contact from "../components/Contact";
import SkillsSection from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
export default function Dashboard() {
  return (
    <>
      <main className="pt-6">
        <Hero />
        <ProjectSection />
        <SkillsSection />
        <Contact />

        <footer className="mt-12 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ram - Built with React, TypeScript,
          Tailwind & Motion
        </footer>
      </main>
    </>
  );
}
