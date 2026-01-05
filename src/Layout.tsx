import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="relative min-h-screen bg-linear-to-b from-slate-50 to-white text-slate-900 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[32px_32px]">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
