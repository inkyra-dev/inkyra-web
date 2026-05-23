```text
inkyra-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (Syne + DM Sans)
│   │   ├── globals.css         ← Design tokens, glows, animations
│   │   ├── page.tsx            ← Landing page
│   │   └── docs/page.tsx       ← Page docs (placeholder)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx      ← Variants primary/secondary/ghost
│   │   │   ├── Badge.tsx       ← Badge animé
│   │   │   └── GlowCard.tsx    ← Carte avec glow dynamique au curseur
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Sticky, blur au scroll, mobile responsive
│   │   │   └── Footer.tsx      ← Liens, socials, status
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx ← Orbes animés, H1, CTAs, dashboard
│   │   │   ├── StatsSection.tsx
│   │   │   ├── FeaturesSection.tsx ← Grid avec glow au hover
│   │   │   └── CtaSection.tsx
│   │   └── shared/
│   │       └── DashboardPreview.tsx ← Mock animé inspiré d'Inkora
│   └── config/site.ts          ← Config centralisée
├── Dockerfile                  ← Multi-stage, standalone
└── docker-compose.yml          ← Avec labels Traefik intégrés
```
