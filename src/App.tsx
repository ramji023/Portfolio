import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Writing from "./pages/Writing";
import WritingDetail from "./pages/WritingDetail";
import Favorites from "./pages/Favorites";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="writing" element={<Writing />} />
            <Route path="writing/:slug" element={<WritingDetail />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
