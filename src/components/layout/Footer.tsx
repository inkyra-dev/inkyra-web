import Link from "next/link";
import { GitFork, MessageCircle, BookOpen, Activity } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Documentation", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    label: "Community",
    links: [
      { label: "Discord Server", href: siteConfig.discord, external: true },
      { label: "GitHub", href: siteConfig.github, external: true },
      { label: "Support", href: "/support" },
    ],
  },
  {
    label: "Self-hosting",
    links: [
      { label: "Quick Start", href: "/docs/self-hosting" },
      { label: "Docker", href: "/docs/docker" },
      { label: "Configuration", href: "/docs/config" },
    ],
  },
];

const socials = [
  { icon: GitFork, href: siteConfig.github, label: "GitHub" },
  { icon: MessageCircle, href: siteConfig.discord, label: "Discord" },
  { icon: BookOpen, href: siteConfig.docsUrl, label: "Docs" },
  { icon: Activity, href: "/status", label: "Status" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/7 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
              </div>
              <span className="font-syne text-[17px] font-bold text-zinc-100">Inkyra</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              The modern Discord bot platform. Built to scale with your community, open source and self-hostable.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/7 text-zinc-500 transition-all duration-200 hover:border-white/14 hover:bg-white/5 hover:text-zinc-200"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h3 className="font-syne text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-zinc-500 transition-colors duration-150 hover:text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/7 pt-8 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Inkyra. Open source under MIT license.</p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
