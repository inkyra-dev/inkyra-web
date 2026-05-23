import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const docsSections = [
  {
    title: "Getting Started",
    items: ["Introduction", "Quick Start", "Requirements", "Configuration"],
  },
  {
    title: "Self-Hosting",
    items: ["Docker Setup", "Environment Variables", "Database", "Reverse Proxy"],
  },
  {
    title: "Features",
    items: ["Tickets", "Music", "XP & Levels", "Economy", "Moderation", "Automation"],
  },
  {
    title: "API Reference",
    items: ["Authentication", "Endpoints", "Webhooks", "Events"],
  },
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400 mb-3">
            Documentation
          </p>
          <h1 className="font-syne text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Inkyra Docs
          </h1>
          <p className="mt-4 text-lg text-zinc-400 font-light max-w-xl">
            Everything you need to deploy, configure, and extend Inkyra for your
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docsSections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-white/7 bg-[#111114] p-5"
            >
              <h2 className="font-syne text-sm font-semibold text-zinc-200 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center">
          <p className="text-sm text-zinc-400">
            📚 Full documentation is coming soon. In the meantime,{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
              check the GitHub README
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
