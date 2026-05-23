"use client";
import { useEffect, useState } from "react";

const bars = [28, 45, 35, 72, 58, 88, 65, 50, 95, 70, 62, 80];

export function DashboardPreview() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden"
      style={{
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.1)",
      }}
    >
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.7), rgba(99,102,241,0.5), transparent)",
        }}
      />

      {/* Title bar */}
      <div className="flex items-center gap-2 bg-[#0d0d10] px-4 py-3 border-b border-white/7">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57] opacity-80" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e] opacity-80" />
          <div className="h-3 w-3 rounded-full bg-[#28c840] opacity-80" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="rounded-md bg-white/5 px-4 py-1 text-xs text-zinc-500 font-mono">
            dashboard.inkyra.dev
          </span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex bg-[#0c0c0f] min-h-[400px]">
        {/* Sidebar */}
        <aside className="hidden sm:flex w-52 flex-col border-r border-white/7 bg-[#0a0a0d] p-4">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-indigo-400" />
            </div>
            <span className="font-syne text-sm font-bold text-zinc-100">Inkyra</span>
          </div>

          {/* Server selector */}
          <div className="mb-4 rounded-lg bg-white/5 border border-white/7 px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-indigo-500/30 text-[8px] flex items-center justify-center text-indigo-300 font-bold">M</div>
              <span className="text-xs text-zinc-300">My Server</span>
            </div>
            <svg className="h-3 w-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          {[
            { icon: "⊡", label: "Overview", active: true },
            { icon: "🎫", label: "Tickets", badge: "3" },
            { icon: "🎵", label: "Music" },
            { icon: "⭐", label: "XP & Levels" },
            { icon: "💰", label: "Economy" },
            { icon: "🛡️", label: "Moderation" },
            { icon: "⚙️", label: "Settings" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs mb-0.5 cursor-pointer transition-colors ${item.active
                  ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                }`}
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </span>
              {item.badge && (
                <span className="rounded-full bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 text-[9px]">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-syne text-sm font-semibold text-zinc-100">Overview</h2>
              <p className="text-[11px] text-zinc-500 mt-0.5">Last updated just now</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/7 px-3 py-1.5 text-[11px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: "MEMBERS", value: "2,841", color: "text-zinc-100", glow: false },
              { label: "OPEN TICKETS", value: "14", color: "text-indigo-400", glow: true },
              { label: "XP TODAY", value: "9.2k", color: "text-violet-400", glow: true },
              { label: "COMMANDS", value: "1,204", color: "text-zinc-100", glow: false },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-[#111114] border border-white/7 p-3"
                style={
                  stat.glow
                    ? { boxShadow: "0 0 20px rgba(99,102,241,0.08)" }
                    : undefined
                }
              >
                <p className="text-[9px] font-medium uppercase tracking-widest text-zinc-600 mb-1.5">
                  {stat.label}
                </p>
                <p className={`font-syne text-xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="rounded-xl bg-[#111114] border border-white/7 p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
                Activity — last 12 days
              </p>
              <span className="text-[10px] text-emerald-400">↑ 12.4%</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-sm transition-all duration-700"
                    style={{
                      height: animated ? `${h}%` : "4%",
                      background:
                        h > 80
                          ? "linear-gradient(to top, #6366f1, #8b5cf6)"
                          : "rgba(99,102,241,0.25)",
                      transitionDelay: `${i * 40}ms`,
                      boxShadow: h > 80 ? "0 0 8px rgba(99,102,241,0.5)" : "none",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["May 10", "", "", "May 16", "", "", "May 22"].map((l, i) => (
                <span key={i} className="text-[9px] text-zinc-700" style={{ flex: "1", textAlign: "center" }}>
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#111114] border border-white/7 p-3">
              <p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 font-medium">Top Commands</p>
              {["/ticket", "/play", "/balance", "/rank"].map((cmd, i) => (
                <div key={cmd} className="flex items-center justify-between py-1">
                  <span className="font-mono text-[11px] text-zinc-400">{cmd}</span>
                  <span className="text-[10px] text-zinc-600">{[342, 218, 184, 155][i]}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-[#111114] border border-white/7 p-3">
              <p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-2 font-medium">Recent Tickets</p>
              {["Bug report", "Ban appeal", "Question", "Support"].map((t, i) => (
                <div key={t} className="flex items-center justify-between py-1">
                  <span className="text-[11px] text-zinc-400">{t}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-emerald-500/15 text-emerald-400" : i === 1 ? "bg-amber-500/15 text-amber-400" : "bg-zinc-700/50 text-zinc-500"}`}>
                    {i === 0 ? "open" : i === 1 ? "pending" : "closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
