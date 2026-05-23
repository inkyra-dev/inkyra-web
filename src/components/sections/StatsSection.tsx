"use client";
import { motion } from "framer-motion";
import { stats } from "@/config/site";

export function StatsSection() {
  return (
    <section className="relative py-20 border-y border-white/7">
      {/* Gradient line top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-syne text-3xl font-bold text-gradient sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient line bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />
    </section>
  );
}
