import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-250">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
