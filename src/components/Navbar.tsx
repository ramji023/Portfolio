import { ArrowUpRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="w-full sticky top-4 z-40">
      <nav className="max-w-6xl mx-auto px-6 py-3 bg-white/40 backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconLogo />
          <div>
            <div className="text-md font-semibold">
              <span className="bg-clip-text text-slate-900 ">Ram</span> -
              Full-Stack Web Developer
            </div>
            <div className="text-xs text-slate-600">
              React · Node · PostreSQL · Docker
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="work"
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500"
                : "hover:underline hover:text-blue-500"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500"
                : "hover:underline hover:text-blue-500"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "underline text-blue-500"
                : "hover:underline hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
          <a
            href="https://drive.google.com/file/d/10ZHDVM7qvbrlPJtNxGjVZ7YCJFdqcwWM/view?usp=drive_link"
            className="px-3 py-1 flex items-center rounded-md border border-slate-300 hover:bg-slate-50 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="md:hidden">
          {/* small-screen hamburger - simple placeholder for extension */}
          <button aria-label="menu" className="p-2 rounded-md">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

// ---------------- UI Pieces ----------------
function IconLogo() {
  const navigate = useNavigate()
  return (
    <div
    onClick={()=>navigate("/")}
    className="w-10 cursor-pointer h-10 rounded-xl bg-linear-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-semibold">
      RM
    </div>
  );
}
