import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-primary text-text-primary bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[32px_32px]">
        <div className="px-4 md:px-10 mx-0 md:mx-15">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
