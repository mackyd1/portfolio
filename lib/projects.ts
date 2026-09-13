export interface FeaturedProject {
  title: string;
  role?: string;
  tagline: string;
  /** Longer intro paragraph shown under the title. */
  description: string;
  problem: string;
  approach: string;
  why: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional path to an image in /public. */
  image?: string;
}

export interface SmallProject {
  year: string;
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "SpaceAware",
    role: "Personal Project",
    tagline: "Real-time IoT audio-privacy monitor",
    description:
      "A network of ESP32 sensors that detects when sound is leaking out of a room in real time, without ever recording or transmitting the actual audio. The privacy guarantee was the whole point of the build.",
    problem:
      "Shared walls, open offices, and thin doors make it hard to know when a private conversation is carrying further than you think. Most monitoring tools solve this by recording audio, which creates exactly the privacy problem you were trying to avoid.",
    approach:
      "Four distributed ESP32 nodes stream signal features (never raw audio) over MQTT/TLS to a Python/Flask backend, which scores them across a 6-signal comparison matrix and pushes results to a live dashboard in under 2 seconds. Every connection uses per-node auth and certificate-based verification, and degraded sensors get flagged automatically.",
    why:
      "I wanted to see if I could build something genuinely useful under a hard constraint: zero raw audio ever leaves a device. Designing the whole pipeline around that rule, from the sensors up to the dashboard, taught me more about real systems than any tutorial could.",
    tags: [
      "Python",
      "Flask",
      "Flask-SocketIO",
      "MQTT",
      "TLS",
      "ESP32",
      "SQLite",
    ],
  },
  {
    title: "Connect Meet",
    role: "Personal Project",
    tagline: "Social platform for discovering local meetups",
    description:
      "An app for finding and joining local meetups, with an interactive map so you can see what's happening nearby before you commit to showing up.",
    problem:
      "Finding local events usually means scrolling endless text lists with no sense of where anything actually is. If a meetup is across the city, you often don't realize until you're already interested.",
    approach:
      "I built the frontend in React and TypeScript with a Supabase backend handling auth and a Postgres database, then dropped in a Leaflet map so people browse events by location instead of by list. TanStack Query handles caching, shadcn/ui gives it a clean component system, and it's deployed on Vercel.",
    why:
      "I wanted a full end-to-end product I owned front to back, from the database schema to the deployed URL. It was a good excuse to get comfortable with Supabase and mapping libraries at the same time.",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Leaflet",
      "TanStack Query",
      "Tailwind CSS",
      "Vite",
    ],
    liveUrl: "https://connect-meet-alpha.vercel.app",
    repoUrl: "https://github.com/mackyd1/connect-meet-",
  },
];

export const smallProjects: SmallProject[] = [
  {
    year: "2026",
    title: "Word of the Week",
    description:
      "A free iPhone Lock and Home Screen widget that surfaces a new vocabulary word every week, built entirely in Scriptable with live definitions from a dictionary API and an offline fallback. No Mac or App Store needed.",
    repoUrl: "https://github.com/mackyd1/word-of-the-week",
  },
];
