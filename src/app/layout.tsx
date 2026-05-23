import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Modern Discord Bot Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Discord bot", "community", "XP", "economy", "tickets", "music", "self-hosted", "Go"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Modern Discord Bot Platform`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#09090b] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
