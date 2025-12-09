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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Spoona - Recipe App",
    description:
      "A feature-rich recipe application where users can explore, create, and manage recipes with personalized tools.",
    image:
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765201749/009d0445-3f6d-49ae-b961-da87a3e90b33.png",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765245927/be5c1cf3-5831-455e-b35b-7268dab7e40c.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765245850/5b2eaa0b-f4dc-4693-b6ba-0a8ef4cdc9da.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765245771/df751387-3ec1-4427-8f4c-05913c8c2507.png",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "JWT"],
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
  },
  {
    id: 2,
    title: "QuizArena - Multiplayer Quiz Game",
    description:
      "A real-time quiz platform where admins can host quizzes and players can join instantly.",
    image:
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765250929/quiz-arena_2_exjukt.jpg",
    gallery: [
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246075/7241563a-9c17-466f-b984-2e15f43b18f1.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246151/a8f3d486-3f3a-4ee6-9023-a661a9ea0607.png",
      "https://res.cloudinary.com/dqr7qcgch/image/upload/v1765246206/7f8de7f9-f6b4-420b-8bc4-85f5ef4827bf.png",
    ],
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "Tailwind"],
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
    tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
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
  },
];
