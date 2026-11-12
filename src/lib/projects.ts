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
      "Everything a streamer does before, during and after going live, in one product: OBS docks for running the stream, AI-written titles, scripts and social posts, and VOD repurposing. Subscriptions, background workers and a desktop installer included.",
    facts: ["v6.40 in production", "2,200+ commits since Jan 2025", "380+ tagged releases"],
    techStack: ["Next.js 15", "React 19", "PostgreSQL", "Prisma", "Redis + BullMQ", "Stripe"],
    visual: { type: "image", src: "/portfolio-screenshots/prelive-2026.webp" },
    liveUrl: "https://prelive.ai",
  },
  {
    id: "alaap",
    name: "Alaap",
    tagline: "AI voice-note library for a music teacher",
    category: "Mobile-first AI app",
    description:
      "A vocal teacher had thousands of unnamed voice notes in Hindi, Urdu and English. Alaap classifies each one as speech, singing or instrumental, transcribes it, titles and tags it, guesses raga, taal and key, and makes the whole library searchable by meaning from a phone.",
    facts: ["Hindi, Urdu and English", "Semantic search across scripts", "Installable PWA"],
    techStack: ["Next.js 16", "Neon Postgres + pgvector", "Cloudflare R2", "Google Gemini", "Vercel Workflow"],
    visual: { type: "image", src: "/portfolio-screenshots/alaap.webp" },
    access: "Private client app",
  },
  {
    id: "tack",
    name: "Tack",
    tagline: "Issue tracker built for AI agents",
    category: "Developer tool",
    description:
      "An epic and story tracker designed to be driven by coding agents instead of clicked through by people. It ships as a web app, a CLI and an MCP server, so an agent can pull the next ready story, claim it, link its pull request and close it without leaving the terminal. I run my own studio on it.",
    facts: ["Web app + CLI + MCP server", "Imports from Linear, Jira and GitHub", "Built in under four weeks"],
    techStack: ["Next.js", "TypeScript", "pnpm + Turborepo", "Drizzle ORM", "MCP"],
    visual: {
      type: "terminal",
      title: "tack mcp · tools an agent calls",
      lines: [
        "next_ready_story",
        "create_branch_name",
        "move_story        → In Progress",
        "add_code_pointer",
        "list_linked_prs",
        "get_deploy_status",
        "move_story        → Done",
      ],
    },
    access: "Private, in daily use",
  },
  {
    id: "verygoodmelon",
    name: "VeryGoodMelon",
    tagline: "Twelve web games built to calm you down",
    category: "Games",
    description:
      "A collection of twelve original browser games about slowing down and thinking clearly: ethical dilemmas, a patience game, breathing exercises, and AI conversations and debates with historical thinkers. No ads, and no account needed to play.",
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
    tagline: "Open-source MCP server, published on PyPI",
    category: "Open source",
    description:
      "A Model Context Protocol server that lets Claude and other AI assistants control a home media stack in plain language: Sonarr, Radarr, Prowlarr, Bazarr, Overseerr and Plex behind one interface.",
    facts: ["Published on PyPI", "8 stars, 8 forks on GitHub", "MIT licensed"],
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
    tagline: "AI music production companion",
    category: "Creative tool",
    description:
      "An AI producer for solo musicians who struggle to finish tracks. Hum, tap or describe an idea, and a session-aware assistant helps with arrangement, chords and what to work on next.",
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
      "Pulls transactions from Mercury and Chase, reads invoices out of Gmail, and attributes every dollar to a product. Bank access is read-only by design, and the LLM never sees an account number.",
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
    tagline: "Autonomous software improvement system",
    category: "Agent infrastructure",
    description:
      "Runs several Claude Code workers in parallel against a codebase. Every change has to pass five validation gates before it is committed, and a failed gate rolls the change back.",
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
    tagline: "AI stock research app",
    category: "Web app",
    description:
      "Combines LLM analysis with market data to produce research reports on individual stocks.",
    facts: [],
    techStack: ["Next.js", "TypeScript", "Prisma", "OpenAI"],
    visual: { type: "image", src: "/portfolio-screenshots/midas-viewport.webp" },
    liveUrl: "https://ai-stock-researcher.vercel.app",
  },
  {
    id: "estimaite",
    name: "EstimAIte",
    tagline: "AI-enhanced planning poker",
    category: "Web app",
    description:
      "Planning poker for agile teams, with real-time rooms and AI story analysis.",
    facts: ["Open source (MIT)"],
    techStack: ["Next.js", "TypeScript", "Pusher", "Tailwind CSS"],
    visual: { type: "image", src: "/portfolio-screenshots/estimaite-viewport.webp" },
    liveUrl: "https://estimaite.vercel.app",
    githubUrl: "https://github.com/shaktech786/estimaite",
  },
]
