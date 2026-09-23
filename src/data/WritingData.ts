export interface Article {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  readTime: string;
  tags: string[];
  summary: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "taste-cant-be-prompted",
    title: "Taste Can't Be Prompted",
    date: "29.JUL.2026",
    isoDate: "2026-07-29",
    readTime: "4 min read",
    tags: ["Design", "AI", "Craftsmanship"],
    summary: "AI generates infinite variations in seconds, but taste remains the ultimate human differentiator — knowing what to discard, what to keep, and why it matters.",
    content: [
      "Software development and product design are going through an unprecedented explosion of velocity. Tools can generate components, backend handlers, full landing pages, and intricate color palettes in mere seconds. Yet, when everyone has access to infinite generation, the distinguishing metric shifts completely.",
      "The value is no longer in the ability to produce raw output; it is in having the discernment to know what is mediocre, what is derivative, and what is genuinely exceptional. Taste is an accumulated library of reference points, cultural context, subtle empathy, and relentless editing.",
      "When we look at iconic software products, the magic is never in generic completeness. It resides in the 10% of eccentric, deliberate decisions: the weight of a border line, the deceleration curve of a modal animation, the tone of an error message when a network drops, or the whitespace around an essay heading.",
      "You cannot prompt taste into existence because prompting relies on the statistical average of existing internet patterns. Great work has always existed at the edges — in the idiosyncratic restraint of a builder who refuses to settle for 'good enough'.",
      "As builders in the age of AI, our primary superpower isn't typing speed or syntax recall anymore. It is taste, judgment, and the refusal to ship boring things."
    ]
  },
  {
    slug: "engineering-real-time-websockets",
    title: "Engineering for Real-Time: WebSockets at Scale",
    date: "14.MAY.2026",
    isoDate: "2026-05-14",
    readTime: "6 min read",
    tags: ["Architecture", "Engineering", "WebSockets"],
    summary: "A practical retrospective on building low-latency multiplayer state synchronization, handling packet drops, and keeping client UIs responsive.",
    content: [
      "Real-time multiplayer systems look deceptively straightforward until latency, concurrent state mutations, and intermittent client disconnects collide. While building live multiplayer games and synchronous collaborative platforms, the naive 'broadcast everything on every action' approach broke down quickly.",
      "The first crucial lesson was separating authoritative game state from optimistic client prediction. If a player rolls a dice or clicks an answer, the client UI must feel instant without waiting for the roundtrip ACK, while retaining rollback mechanics if the server invalidates the turn.",
      "The second architectural win was delta compression. Instead of shipping the entire board state across WebSocket frames on every tick, sending minimal patch objects reduced network egress by over 78% during peak 4-player sessions.",
      "Heartbeats, automated reconnection backoffs, and reconnection token recovery turn an annoying wifi glitch into a transparent re-sync that users don't even notice.",
      "When crafted carefully, real-time web experiences blur the boundary between a traditional remote webpage and native desktop gaming."
    ]
  },
  {
    slug: "power-of-monospaced-systems",
    title: "The Power of Monospaced Systems",
    date: "02.FEB.2026",
    isoDate: "2026-02-02",
    readTime: "3 min read",
    tags: ["Typography", "Design Systems"],
    summary: "Why monospaced typography and disciplined grid systems create timeless, clutter-free user interfaces.",
    content: [
      "There is an undeniable rhythm in monospaced typography. Every character occupies an identical optical footprint, bringing mathematical clarity to tabular data, timelines, metadata badges, and code snippets.",
      "Combining a warm, humanist serif for headlines with high-contrast monospaced metadata bridges the gap between classic editorial print and modern terminal tools.",
      "Restraint is the hardest thing in design. When you constrain yourself to fewer font weights, precise border tokens, and predictable typographic scales, the content itself takes center stage.",
      "Simplicity isn't the absence of detail — it's the utmost mastery of essential elements."
    ]
  },
  {
    slug: "why-fullstack-builders-think-differently",
    title: "Why Full-Stack Builders Think Differently",
    date: "18.NOV.2025",
    isoDate: "2025-11-18",
    readTime: "5 min read",
    tags: ["Engineering", "Product"],
    summary: "How understanding database indexes, network protocols, and CSS rendering loops shapes more thoughtful product decisions.",
    content: [
      "When a developer designs an interface with full understanding of how PostgreSQL indexes and database constraints work, they design differently. They know how to handle loading skeletons before data hits the screen, and they know where pagination bottlenecks occur before QA tests them.",
      "Similarly, when backend architecture is designed by someone who cares about 60fps micro-animations and smooth layout shifts, API payloads are structured to serve UI needs cleanly without 15 redundant requests.",
      "The boundary between 'designer', 'frontend engineer', and 'backend architect' is shrinking. The most delightful software is crafted by builders who can conceptualize the full loop from a Figma vector to a Docker container in production."
    ]
  }
];
