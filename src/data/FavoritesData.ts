export interface FavoriteItem {
  id: string;
  title: string;
  category: "Design" | "Dev Tools" | "AI & Craft" | "Apps" | "Reading";
  url: string;
  domain: string;
  description: string;
  badge?: string;
}

export const favorites: FavoriteItem[] = [
  {
    id: "peerlist",
    title: "Peerlist",
    category: "Apps",
    url: "https://peerlist.io",
    domain: "peerlist.io",
    description: "Professional network for tech people to showcase work and connect with fellow builders.",
    badge: "Community"
  },
  {
    id: "linear",
    title: "Linear",
    category: "Apps",
    url: "https://linear.app",
    domain: "linear.app",
    description: "The gold standard of fast, keyboard-first issue tracking and product craftsmanship.",
    badge: "Daily Driver"
  },
  {
    id: "raycast",
    title: "Raycast",
    category: "Apps",
    url: "https://raycast.com",
    domain: "raycast.com",
    description: "An extendable launcher that transforms your desktop workflow with scripts and hotkeys.",
    badge: "Essential"
  },
  {
    id: "motion",
    title: "Motion (Framer Motion)",
    category: "Dev Tools",
    url: "https://motion.dev",
    domain: "motion.dev",
    description: "A production-ready motion library for React that makes physics-based animations a breeze.",
    badge: "Animation"
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    category: "Dev Tools",
    url: "https://tailwindcss.com",
    domain: "tailwindcss.com",
    description: "Utility-first CSS framework for rapid UI composition without leaving markup.",
    badge: "Styling"
  },
  {
    id: "shadcn",
    title: "shadcn/ui",
    category: "Design",
    url: "https://ui.shadcn.com",
    domain: "ui.shadcn.com",
    description: "Beautifully designed, copy-paste components that you own and customize completely.",
    badge: "UI Kit"
  },
  {
    id: "resend",
    title: "Resend",
    category: "Dev Tools",
    url: "https://resend.com",
    domain: "resend.com",
    description: "The best email API for developers, built with clean DX and React Email support.",
    badge: "Infrastructure"
  },
  {
    id: "crafting-interpreters",
    title: "Crafting Interpreters",
    category: "Reading",
    url: "https://craftinginterpreters.com",
    domain: "craftinginterpreters.com",
    description: "Bob Nystrom's masterpiece handbook on programming languages, bytecode virtual machines, and compilers.",
    badge: "Book"
  },
  {
    id: "fonts-in-use",
    title: "Fonts In Use",
    category: "Design",
    url: "https://fontsinuse.com",
    domain: "fontsinuse.com",
    description: "An index of typography examples across graphic design, editorial print, and digital mediums.",
    badge: "Inspiration"
  },
  {
    id: "lucide",
    title: "Lucide Icons",
    category: "Design",
    url: "https://lucide.dev",
    domain: "lucide.dev",
    description: "Clean, consistent open-source icon set with seamless React support.",
    badge: "Icons"
  },
  {
    id: "cursor",
    title: "Cursor",
    category: "AI & Craft",
    url: "https://cursor.com",
    domain: "cursor.com",
    description: "The AI-first code editor that reimagines developer velocity and codebase comprehension.",
    badge: "Editor"
  },
  {
    id: "supabase",
    title: "Supabase & Postgres",
    category: "Dev Tools",
    url: "https://supabase.com",
    domain: "supabase.com",
    description: "Open source Firebase alternative with real-time PostgreSQL database primitives.",
    badge: "Database"
  }
];
