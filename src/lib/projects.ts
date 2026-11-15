export type ProjectVisual =
  | { type: "image"; src: string }
  | { type: "terminal"; title: string; lines: string[] }

export interface Project {
  id: string
  name: string
  tagline: string
  category: string
  description: string
  facts: string[]
  techStack: string[]
  visual: ProjectVisual
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  access?: string
}

export const studioStats = [
  { value: "12+", label: "products built solo" },
  { value: "4,000+", label: "commits across them" },
  { value: "1", label: "engineer, no team" },
  { value: "$0", label: "outside funding" },
]

export const leadProjects: Project[] = [
  {
    id: "prelive",
    name: "Prelive",
    tagline: "Streaming SaaS for Twitch, YouTube and Kick creators",
    category: "Web platform",
    description:
      "Everything a streamer does before, during and after going live, in one product: OBS docks for running the stream, auto-drafted titles, scripts and social posts, and VOD repurposing. Subscriptions, background workers and a desktop installer included.",
    facts: ["v6.40 in production", "2,100+ commits since Jan 2025", "370+ tagged releases"],
    techStack: ["Next.js 15", "React 19", "PostgreSQL", "Prisma", "Redis + BullMQ", "Stripe"],
    visual: { type: "image", src: "/portfolio-screenshots/prelive-2026.webp" },
    liveUrl: "https://prelive.ai",
  },
  {
    id: "alaap",
    name: "Alaap",
    tagline: "Searchable voice-note library for a music teacher",
    category: "Mobile-first app",
    description:
      "A vocal teacher had thousands of unnamed voice notes in Hindi, Urdu and English. Alaap classifies each one as speech, singing or instrumental, transcribes it, titles and tags it, guesses raga, taal and key, and makes the whole library searchable by meaning from a phone.",
    facts: ["Hindi, Urdu and English", "Semantic search across scripts", "Installable PWA"],
    techStack: ["Next.js 16", "Neon Postgres + pgvector", "Cloudflare R2", "Google Gemini", "Vercel Workflow"],
    visual: { type: "image", src: "/portfolio-screenshots/alaap-library.webp" },
    access: "Private client app",
  },
  {
    id: "tack",
    name: "Tack",
    tagline: "Project tracker that runs from the terminal",
    category: "Developer tool",
    description:
      "An epic and story tracker for teams that would rather automate their workflow than click through it. It ships as a web app and a command-line tool, so work can be picked up, claimed, linked to its pull request and closed without leaving the terminal. I run my own studio on it.",
    facts: ["Web app + command-line tool", "Imports from Linear, Jira and GitHub", "Built in under four weeks"],
    techStack: ["Next.js", "TypeScript", "pnpm + Turborepo", "Drizzle ORM", "MCP"],
    visual: { type: "image", src: "/portfolio-screenshots/tack-board.webp" },
    access: "Private, in daily use",
  },
  {
    id: "verygoodmelon",
    name: "VeryGoodMelon",
    tagline: "Twelve web games built to calm you down",
    category: "Games",
    description:
      "A collection of twelve original browser games about slowing down and thinking clearly: ethical dilemmas, a patience game, breathing exercises, and voiced conversations and debates with historical thinkers. No ads, and no account needed to play.",
    facts: ["12 original games", "No ads, no sign-up to play", "Open source"],
    techStack: ["Next.js 16", "TypeScript", "Supabase", "Google Gemini", "ElevenLabs"],
    visual: { type: "image", src: "/portfolio-screenshots/verygoodmelon-2026.webp" },
    liveUrl: "https://verygoodmelon.fun",
    liveLabel: "Play",
    githubUrl: "https://github.com/shaktech786/verygoodmelon.fun",
  },
  {
    id: "arr-suite-mcp",
    name: "Arr Suite MCP Server",
    tagline: "Open-source home media integration, on PyPI",
    category: "Open source",
    description:
      "Six separate media apps, Sonarr, Radarr, Prowlarr, Bazarr, Overseerr and Plex, behind one interface you can drive in plain language. One of three open-source integrations I have published, alongside a Restream integration and the Prelive one on npm.",
    facts: ["Published on PyPI", "8 stars, 8 forks on GitHub", "Listed in the official MCP community servers"],
    techStack: ["Python", "MCP", "Pydantic", "httpx"],
    visual: { type: "image", src: "/portfolio-screenshots/arr-suite-mcp.webp" },
    liveUrl: "https://pypi.org/project/arr-suite-mcp/",
    liveLabel: "PyPI",
    githubUrl: "https://github.com/shaktech786/arr-suite-mcp-server",
  },
]

export const moreProjects: Project[] = [
  {
    id: "prelive-deck",
    name: "Prelive Deck",
    tagline: "Desktop soundboard and stream control surface",
    category: "Desktop app",
    description:
      "An Electron app that turns a fightpad or arcade-stick controller into a soundboard. Each pad plays a sound and can fire a stream action on the same press, with OBS, LiveSplit and Discord integrations.",
    facts: ["v2.34", "Open source"],
    techStack: ["Electron", "TypeScript", "React", "OBS WebSocket"],
    visual: { type: "image", src: "/portfolio-screenshots/prelive-deck.webp" },
    githubUrl: "https://github.com/shaktech786/soundpad-pro",
  },
  {
    id: "unbottle",
    name: "Unbottle",
    tagline: "Helps solo musicians finish their tracks",
    category: "Creative tool",
    description:
      "A production companion for solo musicians who start more tracks than they finish. Hum, tap or describe an idea, and it helps with arrangement, chords and what to work on next, remembering where each session left off.",
    facts: ["Open source"],
    techStack: ["Next.js 16", "Supabase", "Tailwind CSS 4"],
    visual: { type: "image", src: "/portfolio-screenshots/unbottle-viewport.webp" },
    liveUrl: "https://unbottle-rouge.vercel.app",
    githubUrl: "https://github.com/shaktech786/unbottle",
  },
  {
    id: "bursar",
    name: "Bursar",
    tagline: "Self-hosted accountant for a one-person company",
    category: "Internal system",
    description:
      "Pulls transactions from Mercury and Chase, reads invoices out of Gmail, and attributes every dollar to a product. Bank access is read-only by design, and account numbers are redacted before anything is sent to an outside service.",
    facts: ["Self-hosted", "Read-only bank access"],
    techStack: ["TypeScript", "Node.js", "Next.js"],
    visual: {
      type: "terminal",
      title: "bursar · packages",
      lines: [
        "core       money, rules engine, attribution",
        "providers  Mercury, Teller/Chase, OFX import",
        "mail       Gmail (read-only), invoice parsers",
        "tax        federal, Georgia, Illinois",
        "crypto     envelope encryption, audit log",
        "ai         redaction boundary, budget cap",
      ],
    },
    access: "Private",
  },
  {
    id: "asis",
    name: "ASIS",
    tagline: "Automated code-quality pipeline",
    category: "Developer tooling",
    description:
      "Keeps a codebase healthy without manual cleanup. Improvement passes run in parallel, every change has to pass five validation gates before it is committed, and a failed gate rolls the change back.",
    facts: ["5 validation gates", "Auto-rollback"],
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "MCP"],
    visual: {
      type: "terminal",
      title: "asis · validation gates",
      lines: ["1  syntax", "2  build", "3  unit tests", "4  integration tests", "5  security", "→  commit, or roll back"],
    },
    access: "Private",
  },
  {
    id: "midas",
    name: "MIDAS",
    tagline: "Stock research reports on demand",
    category: "Web app",
    description:
      "Pulls market data on any individual stock and turns it into a readable research report.",
    facts: [],
    techStack: ["Next.js", "TypeScript", "Prisma", "OpenAI"],
    visual: { type: "image", src: "/portfolio-screenshots/midas-viewport.webp" },
    liveUrl: "https://ai-stock-researcher.vercel.app",
  },
  {
    id: "estimaite",
    name: "EstimAIte",
    tagline: "Planning poker for agile teams",
    category: "Web app",
    description:
      "Real-time estimation rooms for agile teams, with automated story analysis before the team votes.",
    facts: ["Open source (MIT)"],
    techStack: ["Next.js", "TypeScript", "Pusher", "Tailwind CSS"],
    visual: { type: "image", src: "/portfolio-screenshots/estimaite-viewport.webp" },
    liveUrl: "https://estimaite.vercel.app",
    githubUrl: "https://github.com/shaktech786/estimaite",
  },
]
