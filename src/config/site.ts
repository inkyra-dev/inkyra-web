export const siteConfig = {
  name: "Inkyra",
  description:
    "The modern Discord bot platform built for communities that take their server seriously. Extensible, powerful, and yours.",
  url: "https://inkyra.dev",
  discordInvite: "https://discord.com/oauth2/authorize",
  github: "https://github.com/inkyra-dev",
  discord: "https://discord.gg/inkyra",
  docsUrl: "http://localhost:3001",  // local
  // docsUrl: "https://docs.inkyra.dev",  // prod plus tard
  version: "1.0.0",
};

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/#pricing" },
  { label: "GitHub", href: siteConfig.github, external: true },
];

export const features = [
  {
    id: "tickets",
    icon: "ticket",
    title: "Tickets",
    description:
      "Support threads with categories, auto-close, transcripts and staff assignment.",
    gradient: "from-violet-500/20 to-indigo-500/10",
    glow: "violet",
  },
  {
    id: "music",
    icon: "music",
    title: "Music",
    description:
      "High-quality YouTube playback with queue management, skip votes and playlists.",
    gradient: "from-indigo-500/20 to-blue-500/10",
    glow: "indigo",
  },
  {
    id: "xp",
    icon: "trophy",
    title: "XP & Levels",
    description:
      "Engagement engine with leaderboards, role rewards and activity milestones.",
    gradient: "from-amber-500/20 to-orange-500/10",
    glow: "amber",
  },
  {
    id: "economy",
    icon: "coins",
    title: "Economy",
    description:
      "Virtual currency, shop system, daily rewards and peer-to-peer transfers.",
    gradient: "from-emerald-500/20 to-teal-500/10",
    glow: "emerald",
  },
  {
    id: "moderation",
    icon: "shield",
    title: "Moderation",
    description:
      "Smart auto-mod, audit logs, ban/kick/mute and warning history per user.",
    gradient: "from-red-500/20 to-rose-500/10",
    glow: "red",
  },
  {
    id: "automation",
    icon: "bolt",
    title: "Automation",
    description:
      "Event-driven rules and server workflows. React to any action automatically.",
    gradient: "from-cyan-500/20 to-sky-500/10",
    glow: "cyan",
  },
];

export const stats = [
  { value: "50k+", label: "Commands handled" },
  { value: "200+", label: "Servers" },
  { value: "99.9%", label: "Uptime" },
  { value: "< 50ms", label: "Response time" },
];
