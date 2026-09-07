export interface Project {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "SpaceAware — Real-time IoT Privacy Monitor",
    description:
      "A network of little sensors that can tell when sound is leaking out of a room, without ever recording or sending the actual audio. The privacy guarantee was the whole point.",
    tags: [
      "Python",
      "Flask",
      "Flask-SocketIO",
      "MQTT",
      "TLS",
      "ESP32",
      "SQLite",
    ],
    highlights: [
      "Wired up 4 ESP32 nodes, an MQTT/TLS message layer, a Flask backend, and a live dashboard that updates in under 2 seconds.",
      "Locked down every connection with TLS, per-node auth, and certificate checks so raw audio never leaves the device.",
      "Wrote a scoring engine that fuses 6 signals to catch leaks with 80%+ accuracy, and flags sensors when they start acting up.",
    ],
    featured: true,
  },
  {
    title: "Connect Meet — Social Meetup Platform",
    description:
      "An app for finding and joining local meetups, with a map so you can actually see what's happening nearby before you commit to showing up.",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Leaflet",
      "TanStack Query",
      "Tailwind",
      "Vite",
    ],
    highlights: [
      "Built it in React and TypeScript, with Supabase handling auth and the database so I could focus on the app itself.",
      "Dropped in a Leaflet map so people can browse meetups by where they are, not just scroll a list.",
      "Used TanStack Query for caching and shadcn/ui for the components, then shipped it to Vercel.",
    ],
    liveUrl: "https://connect-meet-alpha.vercel.app",
    repoUrl: "https://github.com/mackyd1/connect-meet-",
    featured: true,
  },
  {
    title: "Word of the Week — iOS Widget",
    description:
      "I wanted to learn a new word every week without thinking about it, so I put one on my iPhone home screen. No Mac or App Store needed, it all runs in Scriptable.",
    tags: ["JavaScript", "Scriptable", "iOS Widgets", "REST API"],
    highlights: [
      "The word rolls over every Monday on its own, based on the week number, so I never have to touch it.",
      "Definitions come live from a free dictionary API, with an offline fallback, and it works on every widget size including all the lock screen ones.",
      "iOS makes it weirdly hard to open a link from a widget tap, so I worked around it with a deep-link that pops the dictionary open in a WebView.",
    ],
    repoUrl: "https://github.com/mackyd1/word-of-the-week",
  },
];
