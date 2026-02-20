import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { techIcons } from "../projects/techIcons";
export default function Hero() {
  return (
    <section id="hero" className="px-4 md:px-15 py-7 mb-5">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gap-8 items-center">
          {/* first grid  */}
          <div>
            <p className="text-text-other/70">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight ">
              Ram Ji Mishra.
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-text-other ">
              Full-Stack Web Developer
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-text-primary">
              I build end-to-end web apps.
            </h1>
            <div>
              <p className="mt-4 max-w-2xl text-sm md:text-md text-text-secondary">
                I build full-stack applications end-to-end — crafting UI with
                React and Tailwind, developing backend APIs with Node.js,
                managing databases, and deploying production-ready apps using
                Docker, CI/CD.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/ramji023"
              target="_blank"
              className="inline-flex text-md items-center gap-2 px-3 md:px-4 py-1 md:py-2 rounded-md border border-border-other text-text-other shadow-md hover:scale-[1.02] transition-transform"
            >
              <i
                className={`${techIcons["GitHub"]} text-xl text-text-other`}
              ></i>
              View My Github
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              "Open to work",
              "Available for freelance",
              "Open to remote roles",
              "Open to relocate within India",
            ].map((tag) => (
              <div
                key={tag}
                className="px-3 md:px-4 py-1 md:py-2 text-text-other/80 bg-text-other/10 rounded-4xl hover:scale-[1.02] transition-transform hover:text-text-other"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
