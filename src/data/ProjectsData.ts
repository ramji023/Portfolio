export interface ProjectItem {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  year: string;
  status: "Completed" | "In Progress" | "Paused";
  icon: string; // image url or emoji
  image: string;
  gallery: string[];
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  metrics?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "ludo-king",
    name: "Ludo King",
    role: "Full-Stack & WebSocket Architect",
    tagline: "Multiplayer Real-Time Game",
    description: "A real-time multiplayer Ludo game where up to 4 players can compete online synchronously. Engineered with React and low-latency WebSockets, featuring live room creation, in-game chat, and physics-driven dice animations.",
    year: "2026",
    status: "Completed",
    icon: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1790132296/ludo_logo_hyscfg.png",
    image: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1770120852/b28f2c6c-c6c0-4441-a079-e6bf9641b447.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1770120479/4_fyi2ku.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1770120448/2_vmoykz.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1770120448/3_tjr6fn.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1770120461/1_oh0we7.jpg",
    ],
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "WebSocket", "Node.js"],
    features: [
      "Real-time multiplayer synchronization for up to 4 players simultaneously",
      "Custom room code generator with instant shareable invite links",
      "Low-latency in-game chat channel with live presence states",
      "Optimistic UI updates with rollback-safe server validation",
      "Fully responsive touch controls tailored for mobile and desktop screens"
    ],
    githubUrl: "https://github.com/ramji023/Ludo",
    liveUrl: "https://ludo-livid-beta.vercel.app/",
    metrics: "4-player live sync < 45ms latency"
  },
  {
    id: "quiz-arena",
    name: "QuizArena",
    role: "Full-Stack Developer",
    tagline: "Multiplayer Quiz Platform",
    description: "Real-time multiplayer quiz competition platform featuring an AI-assisted quiz builder, live interactive rooms, instant score calculation, and dynamic competitive leaderboards.",
    year: "2025",
    status: "In Progress",
    icon: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1762574876/logo_b2ojw6.png",
    image: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624264/cbb48788-cc24-4164-a3e8-665b8e073001.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624377/75f70a83-f6af-474a-942a-f3b4b9ef7b39.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1766065502/leaderboard_afpo4q.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246206/7f8de7f9-f6b4-420b-8bc4-85f5ef4827bf.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1766065502/leader-3_s4fvkf.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624551/9cfebddd-7bda-4a89-8f60-065bf9aa9968.png",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Turborepo", "WebSockets"],
    features: [
      "AI-driven question generator across topics with difficulty balancing",
      "Live synced question countdown and interactive buzzer mechanic",
      "Dynamic leaderboard updating in sub-50ms after every question round",
      "Host moderation controls with pause, skip, and penalty actions",
      "Monorepo architecture with reusable UI packages and clean domain boundaries"
    ],
    githubUrl: "https://github.com/ramji023/Quiz-Arena",
    liveUrl: "https://quiz-arena-web.vercel.app/",
    metrics: "Sub-50ms score broadcasts"
  },
  {
    id: "spoona",
    name: "Spoona",
    role: "Full-Stack Developer",
    tagline: "Curated Recipe & Meal Planner",
    description: "A feature-rich culinary application designed to help food enthusiasts discover, customize, and plan meals. Includes weekly nutrient breakdowns, interactive step-by-step cooking modes, and secure user dashboards.",
    year: "2025",
    status: "Completed",
    icon: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1790132244/spoona_e1ronp.svg",
    image: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622595/ddc662de-11fc-432d-9628-17272a8b8cb3.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622712/28648e92-e687-4458-9660-b5eccd59a931.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765245850/5b2eaa0b-f4dc-4693-b6ba-0a8ef4cdc9da.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622865/Screenshot_2026-01-05_194847_qcl442.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622949/0602d782-dcda-43bc-988c-30d18f86af7e.png",
    ],
    tech: ["React", "TypeScript", "React Query", "Express", "PostgreSQL", "JWT", "Docker"],
    features: [
      "Weekly interactive drag-and-drop meal planning calendar",
      "Automated macro and nutrient calculator from raw recipe ingredients",
      "Custom collection bookmarks and public recipe sharing",
      "High-res step gallery with timer integration for active cooking",
      "Optimized PostgreSQL schema with Prisma ORM indexing"
    ],
    githubUrl: "https://github.com/ramji023/Spoona",
    liveUrl: "https://spoona-web.vercel.app/",
    metrics: "100+ curated recipes & meal planner"
  },
  {
    id: "fast-fingers",
    name: "Fast Fingers",
    role: "Frontend Developer",
    tagline: "Typing Speed & Analytics Tester",
    description: "A lightweight typing test tool with live WPM calculation, accuracy tracking, error heatmaps, and interactive post-test performance visual graphs.",
    year: "2025",
    status: "Completed",
    icon: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1790132464/logo_1_p9ng3k.png",
    image: "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765201846/fd59de51-7022-4758-9d67-6856964458e9.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246384/06f1f5ae-99e7-453f-9e55-60dc19430914.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765201846/fd59de51-7022-4758-9d67-6856964458e9.png",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "AnyChart", "Vite"],
    features: [
      "Real-time WPM, CPM, and error delta tracking while typing",
      "Multiple session durations (15s, 30s, 60s) with custom word pools",
      "Interactive SVG chart showing typing velocity curve per second",
      "Minimalist distraction-free UI with smooth caret animations"
    ],
    githubUrl: "https://github.com/ramji023/FastFingers",
    liveUrl: "https://fast-fingers-pi.vercel.app/",
    metrics: "Zero dependencies vanilla engine"
  }
];
