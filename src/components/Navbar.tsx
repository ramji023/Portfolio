import { ArrowUpRight } from "lucide-react";

export default function NavBar() {
  return (
    <div className="sticky top-4 z-50">
      <nav className="mx-auto px-6 py-3 bg-secondary-bg border-b border-border-other backdrop-blur-md rounded-2xl shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <IconLogo /> */}
          <div>
            <div className="text-md font-semibold">
              <a
                href="#hero"
                className="bg-clip-text text-text-other cursor-pointer"
              >
                Ram
              </a>{" "}
              - Full-Stack Web Developer
            </div>
            <div className="text-xs text-text-secondary">
              React · Node · PostreSQL · Docker
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-text-other">Projects</a>
          <a href="#skills" className="hover:text-text-other">Skills</a>
          <a href="#contact" className="hover:text-text-other">Contact</a>
          <a
            href="https://drive.google.com/file/d/10ZHDVM7qvbrlPJtNxGjVZ7YCJFdqcwWM/view?usp=drive_link"
            className="px-3 py-1 flex items-center rounded-md border text-text-other border-border-other text-sm hover:scale-110 transition"
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
// function IconLogo() {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate("/")}
//       className="w-10 cursor-pointer h-10 rounded-xl bg-linear-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-semibold"
//     >
//       RM
//     </div>
//   );
// }
