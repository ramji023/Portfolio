import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { techIcons } from "../projects/techIcons";
export default function Hero() {
  return (
    <section className="px-15 py-10">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* first grid  */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight">
              Hi, I’m Ram Ji —{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-sky-400">
                Full-Stack Web Developer
              </span>{" "}
              building interactive, fast web apps
            </h1>

            <p className="mt-4 text-text-secondary max-w-xl text-sm">
              I build full-stack applications end-to-end — crafting UI with
              React and Tailwind, developing backend APIs with Node.js, managing
              databases, and deploying production-ready apps using Docker,
              CI/CD.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/ramji023"
                target="_blank"
                className="inline-flex text-md items-center gap-2 px-4 py-2 rounded-md border border-border-DEFAULT bg-btn-primary hover:bg-btn-primary-hover text-btn-primary-text shadow-md hover:scale-[1.02] transition-transform"
              >
                <i className={`${techIcons["GitHub"]} text-xl text-white`}></i>
                View My Github
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-primary hover:bg-surface hover:border-accent shadow-md hover:scale-[1.02] transition-all"
              >
                Contact Me
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
                  className="px-4 py-2 text-text-primary bg-secondary-bg rounded-lg border border-border-DEFAULT hover:scale-[1.02] transition-transform "
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
              className="relative w-90 md:h-90"
            >
              <div className="absolute inset-0 rounded-full blur-xl" />

              <img
                src="https://res.cloudinary.com/dqr7qcgch/image/upload/v1768841921/Gemini_Generated_Image_juxacujuxacujuxa_tdjbk6.png"
                alt="Ram Ji Avatar"
                className="relative w-full h-full object-cover rounded-full border-2 border-border-DEFAULT shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
