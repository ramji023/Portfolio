import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleExperienceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("experience");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("experience");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/", onClick: undefined },
    { name: "Experience", path: "/#experience", onClick: handleExperienceClick },
    { name: "Projects", path: "/projects", onClick: undefined },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/" && !location.hash) return true;
    if (path === "/projects" && location.pathname === "/projects") return true;
    return false;
  };

  return (
    <header className="pt-8 pb-3 mb-6">
      {/* 1st Line: Avatar on left, Theme Switcher on right */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="relative block w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1.5 ring-black/10 dark:ring-white/10 hover:scale-105 transition-transform duration-200"
        >
          <img
            src="https://res.cloudinary.com/dqr7qcgch/image/upload/v1768841921/Gemini_Generated_Image_juxacujuxacujuxa_tdjbk6.png"
            alt="Ram Ji Mishra"
            className="w-full h-full object-cover rounded-full scale-95"
          />
        </Link>

        {/* Theme Toggle Button with "Delight" Tooltip */}
        <div className="relative">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Toggle dark and light theme"
            className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] transition-all cursor-pointer shadow-xs active:scale-95"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {showTooltip && (
            <div className="absolute right-0 top-11 px-2.5 py-1 text-xs font-mono rounded-md bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-md pointer-events-none whitespace-nowrap z-50 animate-fade-in">
              {theme === "dark" ? "Light mode" : "Dark mode"} (Delight)
            </div>
          )}
        </div>
      </div>

      {/* 2nd Line: Name */}
      <div className="mt-3.5">
        <Link to="/" className="inline-block">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] leading-tight hover:opacity-90 transition-opacity">
            Ram Ji Mishra
          </h1>
        </Link>
      </div>

      {/* 3rd Line: Subtitle and Colored Social Icons */}
      <div className="flex items-center gap-3 flex-wrap text-sm text-[var(--text-secondary)] font-normal mt-1">
        <span>Full-Stack Developer @ Airwix Technologies</span>
        <span className="text-[var(--text-muted)] select-none">·</span>
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/ramji023"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-115 transition-all"
            title="GitHub"
          >
            <i className="devicon-github-original text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/ram-ji-mishra-2081bb25a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center hover:scale-115 transition-all"
            title="LinkedIn"
          >
            <i className="devicon-linkedin-plain colored text-base" />
          </a>
          <a
            href="https://x.com/ramjimishra001"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="inline-flex items-center text-[#1DA1F2] hover:scale-115 transition-all"
            title="X (Twitter)"
          >
            <i className="devicon-twitter-original text-base" />
          </a>
        </div>
      </div>

      {/* 4th Line: Navigation Links - Larger & Proportional */}
      <nav className="flex items-center gap-6 sm:gap-7 text-[15.5px] sm:text-base font-medium pt-5 mt-1">
        {navLinks.map((link) => {
          const active = isActive(link.path);
          if (link.onClick) {
            return (
              <a
                key={link.name}
                href={link.path}
                onClick={link.onClick}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1 cursor-pointer"
              >
                {link.name}
              </a>
            );
          }
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 ${
                active
                  ? "text-[var(--text-primary)] font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <a
          href="https://drive.google.com/file/d/1aLh_Si0_A0CBD5AqNrAJaZOPmxgSZOLC/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-0.5 transition-colors py-1"
        >
          Resume <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
