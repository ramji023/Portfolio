export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "airwix",
    company: "Airwix Technologies",
    role: "Full-Stack Developer",
    period: "Apr 2026 – Present",
    location: "Remote",
    current: true,
    description: "Building intelligent AI agents and real-time enterprise management systems.",
    highlights: [
      "Architected and deployed AI agents using Model Context Protocol (MCP) and LLMs to automate ERP and HRMS workflows, reducing manual query times by 65%.",
      "Engineered real-time Kanban project management boards with live WebSocket sync, granular role-based access control (RBAC), and automated audit logs.",
      "Optimized backend throughput by offloading CPU-intensive processing to asynchronous Redis/worker queues, maintaining sub-80ms API response percentiles."
    ],
    tech: ["React", "TypeScript", "Node.js", "MCP", "PostgreSQL", "Docker", "WebSockets"]
  },
  {
    id: "technovartz",
    company: "Technovartz Services",
    role: "MERN Stack Developer",
    period: "Sept 2025 – Nov 2025",
    location: "India",
    current: false,
    description: "Developed marketing automation and messaging pipeline platforms.",
    highlights: [
      "Contributed to high-volume campaign delivery engine integrating the official WhatsApp Business Cloud API.",
      "Designed reusable dynamic message templates, scheduling queues, and real-time open/delivery analytics dashboards.",
      "Optimized complex MongoDB aggregation queries for contact audience segmentation and automated tag assignment."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"]
  }
];
