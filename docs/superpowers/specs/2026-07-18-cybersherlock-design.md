# CyberSherlock — Design Spec

**Date:** 2026-07-18
**Status:** Approved

## Summary

A bluedot.org-style single-page cybersecurity lesson with an interactive world
map at the bottom. Hovering a country surfaces a facts overlay (flag, capital,
region, languages, population); clicking a country slides in a drawer showing
recent cybersecurity news for that country — deliberately skewed toward
breaches, attacks, and consequences — to make the case for why cybersecurity
matters. Hover = who this country is; click = what's happened to it.

News is fetched live from the Exa search API and country facts from the free
REST Countries API; both are persisted in a Postgres database (via Prisma) and
served DB-first so results are durable and API calls are minimized.

## Goals

- A clean, readable, bluedot-like lesson page with genuine intro cybersecurity content.
- An interactive clickable world map; clicking a country opens its recent cyber-news feed.
- A hover overlay showing country facts (flag, capital, region, languages, population).
- Live news via Exa + country facts via REST Countries, persisted in Postgres so data survives restarts and deploys.
- Never render an empty/broken drawer — always degrade gracefully.

## Non-Goals

- User accounts, auth, or personalization.
- Multi-page course navigation (single lesson page only).
- Real-time streaming / websockets (request-on-click is enough).
- Editorial curation UI (no admin panel).

## Tech Stack

- Next.js 15 (App Router), React 19, TypeScript
- pnpm + Turborepo (monorepo)
- Tailwind CSS (bluedot-clean styling)
- `react-simple-maps` + `d3-geo` (SVG world map)
- Prisma + hosted Postgres (Neon or Supabase free tier)
- Exa search API (`category: "news"`)
- REST Countries API (free, no key) for country facts

## Architecture

```
CyberSherlock/
├── apps/web/                    # Next.js 15 app (App Router, React 19)
│   ├── app/
│   │   ├── page.tsx             # lesson content + <ThreatMap/> at bottom
│   │   ├── layout.tsx
│   │   ├── api/news/route.ts    # server route → DB-first, Exa on miss
│   │   └── api/country/route.ts # server route → DB-first, REST Countries on miss
│   ├── components/
│   │   ├── Lesson.tsx           # real cybersecurity lesson content
│   │   ├── ThreatMap.tsx        # react-simple-maps + hover + click handlers
│   │   ├── CountryTooltip.tsx   # hover overlay: flag, capital, region, langs, pop
│   │   └── NewsDrawer.tsx       # slide-in panel with news feed
│   └── lib/
│       ├── exa.ts               # Exa client + query builder
│       └── countries.ts         # REST Countries client + field mapping
├── packages/db/                 # shared Prisma package
│   ├── prisma/schema.prisma
│   └── index.ts                 # exports typed Prisma client
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
└── .env.example
```

Turborepo hosts a single `web` app plus a shared `db` package. This is heavier
than a one-page site strictly requires, but was explicitly requested; the `db`
package gives the monorepo a genuine shared unit and keeps Prisma isolated from
the Next app.

## Data Model (Prisma)

```prisma
model Article {
  id           String   @id @default(cuid())
  country      String   @index
  title        String
  source       String
  url          String   @unique   // dedupe on re-fetch
  publishedAt  DateTime
  snippet      String
  fetchedAt    DateTime @default(now())
}

model Country {
  name       String   @id        // canonical country name (map key)
  flag       String              // flag emoji
  capital    String
  region     String
  subregion  String
  languages  String              // comma-joined official languages
  population Int
  fetchedAt  DateTime @default(now())
}
```

- `Article.url` unique → upsert dedupes across re-fetches.
- `Article.country` indexed → fast per-country queries.
- `fetchedAt` drives freshness decisions on both models.
- `Country.name` is the primary key and the join key with the map's country names.

## Data Flow

1. Page renders lesson + world map.
2. User clicks a country → `ThreatMap` reports the country name → opens `NewsDrawer`.
3. Drawer calls `GET /api/news?country=<name>`.
4. Route queries `Article where country=<name> order by publishedAt desc`.
5. **Fresh** (newest `fetchedAt` < 24h): serve from DB, no Exa call.
6. **Stale or empty**: call Exa, `upsert` returned rows, serve.
7. Response shape per article: `{ title, source, url, publishedAt, snippet }`.
8. Drawer renders a scannable list of outbound links (title, source, date, snippet).

### Country facts flow (hover overlay)

1. User hovers a country → `ThreatMap` reports the name → `CountryTooltip` shows.
2. Tooltip calls `GET /api/country?name=<name>`.
3. Route queries `Country` by name.
4. **Present and fresh** (`fetchedAt` < 30 days — facts rarely change): serve from DB.
5. **Missing or stale**: fetch REST Countries, map fields, `upsert`, serve.
6. Response shape: `{ name, flag, capital, region, subregion, languages, population }`.
7. In-flight hovers are debounced client-side so quick mouse sweeps don't spam the route.

### Exa query

- `query`: `"cybersecurity attack breach ransomware data leak <country>"`
- `category`: `"news"`
- `startPublishedDate`: last 90 days
- Sorted newest first; key passed server-side only (never to browser).

## Error Handling

- **Exa fails but stale rows exist** → serve stale rows + subtle "showing
  archived incidents" note. Never empty.
- **Exa fails and no rows** → friendly empty state ("No recent incidents found").
- **Exa key missing** → treated same as Exa failure (fall back to DB / empty state).
- **Country with genuinely no results** → friendly empty state, not a crash.
- **Repeat clicks** → absorbed by the 24h DB freshness window (no API spam).
- **REST Countries fails and no cached facts** → tooltip shows just the country
  name (from the map), no crash.
- **Repeat hovers** → absorbed by client debounce + the 30-day facts cache.

## Environment

- `EXA_API_KEY` — Exa API key.
- `DATABASE_URL` — Postgres connection string (Neon/Supabase).
- Both live in `.env` (gitignored); documented in `.env.example`.

## The Lesson (top of page)

Genuine short intro content:

- What cybersecurity is and why it matters.
- Main threat classes: ransomware, data breaches, supply-chain attacks, state actors.
- A hand-off line to the map: *"These aren't hypothetical — click any country
  below to see what's happened recently."*

Styling: bluedot-like — clean, centered readable column, generous whitespace.

## Interactive Map

- `react-simple-maps` renders an SVG world map from a topojson source.
- Per-country `onClick` yields the country name.
- Clicking a country: highlights it + slides `NewsDrawer` in from the right;
  map stays visible.
- Per-country `onMouseEnter`/`onMouseLeave` drives `CountryTooltip` (the hover
  facts overlay), positioned near the cursor.
- Always-on name labels for larger countries; small countries stay hover-only
  to avoid clutter.

## Testing

One runnable check on the route logic (news + country share the same DB-first
freshness pattern, so one test covers the shape):

- Freshness decision (fresh → DB path; stale/empty → external-API path).
- Upsert/dedupe (`Article.url`; `Country.name`).
- Stale-fallback when the external API fails.

Run against a test DB or a mocked Prisma client. Map, tooltip, and lesson are
presentational — no tests.

## Open Questions

None — design locked.
