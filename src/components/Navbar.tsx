import { ArrowUpRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="sticky top-4">
      <nav className="mx-auto px-6 py-3 bg-secondary-bg border-b border-border-DEFAULT backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <IconLogo /> */}
          <div>
            <div className="text-md font-semibold">
              <span className="bg-clip-text ">Ram</span> - Full-Stack Web
              Developer
            </div>
            <div className="text-xs text-text-secondary">
              React · Node · PostreSQL · Docker
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="work"
            className={({ isActive }) =>
              isActive ? " " : " hover:text-text-hover"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive ? " " : " hover:text-text-hover"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? " " : " hover:text-text-hover"
            }
          >
            Contact
          </NavLink>
          <a
            href="https://drive.google.com/file/d/10ZHDVM7qvbrlPJtNxGjVZ7YCJFdqcwWM/view?usp=drive_link"
            className="px-3 py-1 flex items-center rounded-md border text-btn-primary-text border-border-DEFAULT bg-btn-primary hover:bg-btn-primary-hover text-sm"
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
    </div>
  );
}

// ---------------- UI Pieces ----------------
function IconLogo() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="w-10 cursor-pointer h-10 rounded-xl bg-linear-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-semibold"
    >
      RM
    </div>
  );
}
