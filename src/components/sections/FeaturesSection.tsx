"use client";
import { motion } from "framer-motion";
import {
  Ticket, Music, Trophy, Coins, Shield, Zap,
  BarChart3, Users
} from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { features } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  ticket: Ticket,
  music: Music,
  trophy: Trophy,
  coins: Coins,
  shield: Shield,
  bolt: Zap,
  chart: BarChart3,
  users: Users,
};

const glowColorMap: Record<string, string> = {
  violet: "rgba(139,92,246,0.2)",
  indigo: "rgba(99,102,241,0.2)",
  amber: "rgba(245,158,11,0.15)",
  emerald: "rgba(16,185,129,0.15)",
  red: "rgba(239,68,68,0.15)",
  cyan: "rgba(6,182,212,0.15)",
};

const iconBgMap: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  indigo: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  red: "bg-red-500/15 text-red-400 border-red-500/20",
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="font-syne text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400 mb-3">
            Features
          </p>
          <h2 className="font-syne text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Everything your community needs
          </h2>
          <p className="mt-4 text-zinc-400 text-lg font-light leading-relaxed">
            A modular platform that grows with your server — from day one to ten
            thousand members.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <GlowCard
                  glowColor={glowColorMap[feature.glow]}
                  className="h-full rounded-none border-0 bg-[#09090b]"
                >
                  <div className="p-6">
                    <div
                      className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${iconBgMap[feature.glow]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-syne text-base font-semibold text-zinc-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
