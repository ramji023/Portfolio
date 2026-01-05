import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { techIcons } from "../projects/techIcons";
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* first grid  */}
          <div>
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
              Hi, I’m Ram Ji —{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-sky-400">
                Full-Stack Web Developer
              </span>{" "}
              building interactive, fast web apps
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              I build full-stack applications end-to-end — crafting UI with
              React and Tailwind, developing backend APIs with Node.js, managing
              databases, and deploying production-ready apps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/ramji023"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white shadow-md hover:scale-[1.02] transition-transform"
              >
                <i className={`${techIcons["GitHub"]} text-2xl text-white`}></i>
                View My Github
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              {[
                "Open to work",
                "Available for freelance",
                "Open to remote roles",
                "Open to relocate within India",
              ].map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-2 bg-slate-100 rounded-lg border border-slate-200 transition hover:bg-slate-200"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {/* second grid  */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-100 h-100 md:w-100 md:h-100"
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-indigo-200/40 to-sky-200/40 blur-xl" />

              <img
                src="/avatar.png"
                alt="Ram Ji Avatar"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
