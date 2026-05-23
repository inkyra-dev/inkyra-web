"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/7 bg-[#09090b]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-colors duration-200">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 group-hover:animate-pulse" />
          </div>
          <span className="font-syne text-[17px] font-800 tracking-tight text-zinc-100">
            Inkyra
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors duration-150 hover:bg-white/5 hover:text-zinc-100"
              >
                {link.label}
                {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/docs">Documentation</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer">
              Add to Discord
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/7 bg-[#09090b]/95 backdrop-blur-md px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/7 flex flex-col gap-2">
            <Button variant="secondary" size="md" asChild className="w-full justify-center">
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button variant="primary" size="md" asChild className="w-full justify-center">
              <Link href={siteConfig.discordInvite} target="_blank">Add to Discord</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
