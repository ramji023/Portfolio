import { useState } from "react";
import { ArrowUpRight,Menu,X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50">
      <nav className="mx-auto px-6 py-3 bg-secondary-bg border-b border-border-other backdrop-blur-md rounded-2xl shadow-sm flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-md font-semibold">
                <a href="#hero" className="bg-clip-text text-text-other cursor-pointer">Ram</a>{" "}
                - Full-Stack Web Developer
              </div>
              <div className="text-xs text-text-secondary">React · Node · PostgreSQL · Docker</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-text-other">Projects</a>
            <a href="#skills" className="hover:text-text-other">Skills</a>
            <a href="#contact" className="hover:text-text-other">Contact</a>
            <a
              href="https://drive.google.com/file/d/1BOwRu86NYhK7Vi3VHWG9mp7gAun04ftm/view?usp=drive_link"
              className="px-3 py-1 flex items-center rounded-md border text-text-other border-border-other text-sm hover:scale-110 transition"
              target="_blank" rel="noreferrer"
            >
              Resume <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <button
            aria-label="menu"
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
          >
            {open ? <X/> : <Menu/>}
          </button>
        </div>

        {/* mobile menu*/}
        {open && (
          <div className="md:hidden flex flex-col gap-3 pt-3 pb-1 text-sm">
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-text-other">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:text-text-other">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-text-other">Contact</a>
            <a
              href="https://drive.google.com/file/d/10ZHDVM7qvbrlPJtNxGjVZ7YCJFdqcwWM/view?usp=drive_link"
              className="inline-flex items-center gap-1 px-3 py-1 w-fit rounded-md border text-text-other border-border-other hover:scale-110 transition"
              target="_blank" rel="noreferrer"
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}