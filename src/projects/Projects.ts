export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  tech: string[];
  features: string[];
  githubLink: string;
  liveLink: string;
  status: "In Progress" | "Completed" | "Under Development" | "Paused";
  date?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Spoona - Recipe App",
    description: `Sppona is a feature-rich recipe application designed to help users discover, create, and manage recipes with ease. 
  It offers personalized tools such as saved favorites, custom recipe creation, and smart organization for everyday cooking.
  The platform focuses on a clean, intuitive user experience while supporting rich content like ingredients, steps, and images.
  Built with scalability in mind, Sppona delivers fast performance and a seamless experience across devices.`,
    image:
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622595/ddc662de-11fc-432d-9628-17272a8b8cb3.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622712/28648e92-e687-4458-9660-b5eccd59a931.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765245850/5b2eaa0b-f4dc-4693-b6ba-0a8ef4cdc9da.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622865/Screenshot_2026-01-05_194847_qcl442.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767622949/0602d782-dcda-43bc-988c-30d18f86af7e.png",
    ],
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind",
      "Express",
      "Zod",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker",
      "CI/CD",
      "GitHubActions",
      "Turborepo",
    ],
    features: [
      "Create, read, like, comment, and save recipes",
      "Plan meals using built-in weekly planner",
      "View recipe nutrient breakdown and health indicators",
      "Responsive UI with personalized dashboards",
      "Secure authentication with JWT",
    ],
    githubLink: "https://github.com/ramji023/Spoona",
    liveLink: "https://spoona-web.vercel.app/",
    status: "Paused",
    date: "June 2025 – Now",
  },
  {
    id: 2,
    title: "QuizArena - Multiplayer Quiz Game",
    description: `QuizArena is a real-time multiplayer quiz platform where hosts can create, edit, and conduct live quizzes for players around the world.
  It features an AI-powered quiz builder that helps hosts generate engaging questions quickly across multiple topics.
  Players can join quizzes instantly, compete in real time, and track their performance through dynamic live leaderboards.
  The platform also allows players to choose their preferred quiz themes, delivering a personalized and competitive gaming experience.`,
    image:
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624264/cbb48788-cc24-4164-a3e8-665b8e073001.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624377/75f70a83-f6af-474a-942a-f3b4b9ef7b39.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1766065502/leaderboard_afpo4q.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246206/7f8de7f9-f6b4-420b-8bc4-85f5ef4827bf.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1766065502/leader-3_s4fvkf.jpg",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1767624551/9cfebddd-7bda-4a89-8f60-065bf9aa9968.png"
    ],
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind",
      "Express",
      "Zod",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker",
      "CI/CD",
      "GitHubActions",
      "Turborepo",
    ],
    features: [
      "Admin can create, save, edit, and delete quizzes",
      "Host live quizzes with real-time synced questions",
      "Multiple players can join using a game code",
      "Customizable quiz themes (light/dark/game themes)",
      "Real-time leaderboard and score updates",
    ],
    githubLink: "https://github.com/ramji023/Quiz-Arena",
    liveLink: "https://quiz-arena-web.vercel.app/",
    status: "In Progress",
    date: "Sept 2025 – Dec 2025",
  },
  {
    id: 3,
    title: "FastFingers - Typing Speed Tester",
    description:
      "A lightweight typing test app with real-time stats, accuracy tracking, and visual performance graphs.",
    image:
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765201846/fd59de51-7022-4758-9d67-6856964458e9.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246384/06f1f5ae-99e7-453f-9e55-60dc19430914.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765201846/fd59de51-7022-4758-9d67-6856964458e9.png",
    ],
    tech: ["HTML", "CSS", "JavaScript", "anychart"],
    features: [
      "Custom timer selection (15s, 30s, 60s)",
      "Real-time WPM, CPM, and accuracy tracking",
      "Interactive performance graph after test",
      "Clean UI focused on typing experience",
      "Lightweight and fully responsive",
    ],
    githubLink: "https://github.com/ramji023/FastFingers",
    liveLink: "https://fast-fingers-pi.vercel.app/",
    status: "Completed",
    date: "Apr 2025 - May 2025",
  },
];
