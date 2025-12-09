import { motion } from "motion/react";
import NavBar from "./components/Navbar";
import Hero from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-slate-50 to-white text-slate-900 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[32px_32px]">
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

      <NavBar />

      <main className="pt-6">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <Contact />

        <footer className="mt-12 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ram - Built with React, TypeScript,
          Tailwind & Motion
        </footer>
      </main>
    </div>
  );
}
