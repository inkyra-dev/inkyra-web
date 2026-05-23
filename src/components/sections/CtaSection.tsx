"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitFork } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow orb */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[400px] w-[700px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.4) 40%, transparent 70%)",
            filter: "blur(40px)",
            animation: "glowPulse 4s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-syne text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400 mb-4">
            Get started today
          </p>
          <h2 className="font-syne text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
            Ready to level up
            <br />
            <span className="text-gradient">your community?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-light text-zinc-400 leading-relaxed">
            Add Inkyra to your Discord server in seconds, or self-host it in
            your homelab for full control.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="xl" asChild>
              <Link href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer">
                Add to Discord — Free
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <GitFork className="h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-zinc-600">
            Free forever for self-hosted instances · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
