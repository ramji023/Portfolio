import { motion } from "motion/react";
import Hero from "../components/HeroSection";
import Contact from "../components/Contact";
import SkillsSection from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
export default function Dashboard() {
  return (
    <>
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

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
