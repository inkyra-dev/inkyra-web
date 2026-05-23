"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { DashboardPreview } from "@/components/shared/DashboardPreview";

const featureTags = [
  "Slash Commands",
  "Ticket System",
  "Music Playback",
  "XP & Economy",
  "Auto Moderation",
  "Event Automation",
  "Multi-server Ready",
  "Docker Ready",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      {/* Grid bg */}
      <div className="bg-grid absolute inset-0" />

      {/* Glow gauche (magenta/violet, comme Zira) */}
      <div
        className="pointer-events-none absolute -top-20 -left-40 h-[700px] w-[700px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "glowPulse 5s ease-in-out infinite",
        }}
      />
      {/* Glow droite */}
      <div
        className="pointer-events-none absolute top-40 -right-40 h-[500px] w-[500px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "glowPulse 7s ease-in-out infinite 2s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Layout 2 colonnes */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* Colonne gauche */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <Badge dot dotAnimate>v{siteConfig.version} — Open Source & Self-hostable</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne text-5xl font-extrabold leading-[1.08] tracking-[-2px] xl:text-6xl"
            >
              Manage your
              <br />
              community
              <br />
              <span className="text-gradient">with precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base font-light leading-relaxed text-zinc-400 max-w-md"
            >
              <span className="font-medium text-zinc-200">Inkyra</span> is the modern Discord bot
              platform built for communities that mean business. Modular, extensible, and entirely yours.
            </motion.p>

            {/* Feature tags — style Zira */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {featureTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer">
                  Add to Discord
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href={siteConfig.docsUrl}>
                  <BookOpen className="h-4 w-4" />
                  Read the docs
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex items-center gap-5 text-xs text-zinc-600"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Free to self-host
              </span>
              <span>Open source · MIT</span>
              <span>Built in Go</span>
            </motion.div>
          </div>

          {/* Colonne droite — Dashboard flottant */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-1 mt-14 lg:mt-0 relative"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            {/* Glow derrière le dashboard */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-90 translate-y-8"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.15) 50%, transparent 75%)",
                filter: "blur(30px)",
              }}
            />
            <DashboardPreview />
          </motion.div>

        </div>
      </div>
    </section>
  );
}