# CyberSherlock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A bluedot-style cybersecurity lesson page with an interactive world map where hovering a country shows its facts and clicking it opens a drawer of recent cyber-attack news, backed by live APIs persisted in Postgres.

**Architecture:** Turborepo monorepo with one Next.js 15 app (`apps/web`) and one shared Prisma package (`packages/db`). Two server routes (`/api/news`, `/api/country`) follow an identical DB-first pattern: serve cached rows if fresh, else fetch the external API (Exa / REST Countries), upsert, and serve. The map is `react-simple-maps`; news uses Exa, facts use the keyless REST Countries API.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, pnpm, Turborepo, Tailwind CSS, Prisma + Postgres, `react-simple-maps`, `d3-geo`, Vitest.

## Global Constraints

- Package manager: **pnpm** only. Node >= 18.18.
- Monorepo: **Turborepo**. Workspaces: `apps/*`, `packages/*`.
- Next.js **15** App Router, React **19**, TypeScript strict.
- Prisma client is generated into and exported from `packages/db`; the Next app imports `@cybersherlock/db`, never `@prisma/client` directly.
- Secrets (`EXA_API_KEY`, `DATABASE_URL`) come from env only. Never commit `.env`. Provide `.env.example`.
- API keys are used only in server routes / server libs — never imported into client components.
- Freshness windows: news = **24h**, country facts = **30 days**.
- Exa query: `"cybersecurity attack breach ransomware data leak <country>"`, `category: "news"`, `startPublishedDate` = 90 days ago.
- Country names are the join key everywhere (map name === `Country.name` === `Article.country`).

---

### Task 1: Monorepo scaffold

**Files:**
- Create: `package.json` (root)
- Create: `pnpm-workspace.yaml`
- Create: `turbo.json`
- Create: `.gitignore`
- Create: `.env.example`
- Create: `.nvmrc`

- [ ] **Step 1: Root `package.json`**
```json
{
  "name": "cybersherlock",
  "private": true,
  "packageManager": "pnpm@9.12.0",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "db:generate": "turbo run db:generate",
    "db:push": "turbo run db:push"
  },
  "devDependencies": {
    "turbo": "^2.1.0",
    "typescript": "^5.6.0"
  },
  "engines": { "node": ">=18.18" }
}
```

- [ ] **Step 2: `pnpm-workspace.yaml`**
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

- [ ] **Step 3: `turbo.json`**
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "!.next/cache/**", "dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": {},
    "test": {},
    "db:generate": { "cache": false },
    "db:push": { "cache": false }
  }
}
```

- [ ] **Step 4: `.gitignore`**
```
node_modules/
.next/
dist/
.turbo/
.env
.env*.local
*.tsbuildinfo
packages/db/generated/
```

- [ ] **Step 5: `.env.example`**
```
# Postgres (Neon/Supabase). Prisma needs this at build & runtime.
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
# Exa search API key — https://dashboard.exa.ai
EXA_API_KEY="your-exa-key"
```

- [ ] **Step 6: `.nvmrc`** → `20`

- [ ] **Step 7: Commit**
```bash
git add package.json pnpm-workspace.yaml turbo.json .gitignore .env.example .nvmrc
git commit -m "chore: scaffold turborepo monorepo"
```

---

### Task 2: Shared Prisma DB package

**Files:**
- Create: `packages/db/package.json`
- Create: `packages/db/tsconfig.json`
- Create: `packages/db/prisma/schema.prisma`
- Create: `packages/db/index.ts`

**Interfaces:**
- Produces: `import { prisma } from "@cybersherlock/db"` — a singleton `PrismaClient`. Also re-exports Prisma model types (`Article`, `Country`).

- [ ] **Step 1: `packages/db/package.json`**
```json
{
  "name": "@cybersherlock/db",
  "version": "0.0.0",
  "private": true,
  "main": "./index.ts",
  "types": "./index.ts",
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push"
  },
  "dependencies": { "@prisma/client": "^5.20.0" },
  "devDependencies": { "prisma": "^5.20.0" }
}
```

- [ ] **Step 2: `packages/db/tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true
  },
  "include": ["index.ts", "prisma"]
}
```

- [ ] **Step 3: `packages/db/prisma/schema.prisma`** (verbatim from spec)
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Article {
  id          String   @id @default(cuid())
  country     String
  title       String
  source      String
  url         String   @unique
  publishedAt DateTime
  snippet     String
  fetchedAt   DateTime @default(now())

  @@index([country])
}

model Country {
  name       String   @id
  flag       String
  capital    String
  region     String
  subregion  String
  languages  String
  population  Int
  fetchedAt  DateTime @default(now())
}
```

- [ ] **Step 4: `packages/db/index.ts`** (singleton avoids dev hot-reload connection storms)
```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type { Article, Country } from "@prisma/client";
```

- [ ] **Step 5: Install + generate**
```bash
pnpm install
pnpm --filter @cybersherlock/db db:generate
```
Expected: Prisma client generates without error. (Requires `DATABASE_URL` set; if absent, generate still succeeds — only `db push` needs the live DB.)

- [ ] **Step 6: Commit**
```bash
git add packages/db pnpm-lock.yaml
git commit -m "feat(db): add shared prisma package with Article and Country models"
```

---

### Task 3: Next.js app scaffold + Tailwind

**Files:**
- Create: `apps/web/package.json`
- Create: `apps/web/next.config.mjs`
- Create: `apps/web/tsconfig.json`
- Create: `apps/web/next-env.d.ts`
- Create: `apps/web/postcss.config.mjs`
- Create: `apps/web/tailwind.config.ts`
- Create: `apps/web/app/globals.css`
- Create: `apps/web/app/layout.tsx`
- Create: `apps/web/app/page.tsx` (placeholder for now)

**Interfaces:**
- Produces: a runnable Next app on `pnpm --filter web dev`. `app/page.tsx` is assembled fully in Task 9.

- [ ] **Step 1: `apps/web/package.json`**
```json
{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate --schema=../../packages/db/prisma/schema.prisma && next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "dependencies": {
    "@cybersherlock/db": "workspace:*",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-simple-maps": "^3.0.0",
    "d3-geo": "^3.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/react-simple-maps": "^3.0.6",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
```

- [ ] **Step 2: `apps/web/next.config.mjs`**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@cybersherlock/db"],
};
export default nextConfig;
```

- [ ] **Step 3: `apps/web/tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: `apps/web/next-env.d.ts`**
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

- [ ] **Step 5: `apps/web/postcss.config.mjs`**
```js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

- [ ] **Step 6: `apps/web/tailwind.config.ts`**
```ts
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 7: `apps/web/app/globals.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --bg: #ffffff; --fg: #1a1a2e; }
body { color: var(--fg); background: var(--bg); }
```

- [ ] **Step 8: `apps/web/app/layout.tsx`**
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberSherlock",
  description: "Why cybersecurity matters — a live threat map.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 9: `apps/web/app/page.tsx`** (temporary)
```tsx
export default function Home() {
  return <main className="mx-auto max-w-3xl px-6 py-16">CyberSherlock</main>;
}
```

- [ ] **Step 10: Verify dev boots**
```bash
pnpm install
pnpm --filter web dev
```
Expected: server starts on http://localhost:3000, page shows "CyberSherlock". Stop the server.

- [ ] **Step 11: Commit**
```bash
git add apps/web pnpm-lock.yaml
git commit -m "feat(web): scaffold next.js app with tailwind"
```

---

### Task 4: Country facts library (REST Countries client)

**Files:**
- Create: `apps/web/lib/countries.ts`

**Interfaces:**
- Produces:
  - `type CountryFacts = { name: string; flag: string; capital: string; region: string; subregion: string; languages: string; population: number }`
  - `async function fetchCountryFacts(name: string): Promise<CountryFacts | null>` — calls REST Countries, maps fields, returns null on any failure/not-found.

- [ ] **Step 1: `apps/web/lib/countries.ts`**
```ts
export type CountryFacts = {
  name: string;
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  languages: string;
  population: number;
};

// REST Countries v3.1 — free, no key. Query by name, request only needed fields.
export async function fetchCountryFacts(name: string): Promise<CountryFacts | null> {
  const url =
    `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}` +
    `?fullText=true&fields=name,flag,capital,region,subregion,languages,population`;
  try {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) return null;
    const data = (await res.json()) as any[];
    const c = data?.[0];
    if (!c) return null;
    return {
      name,
      flag: c.flag ?? "",
      capital: Array.isArray(c.capital) ? c.capital[0] ?? "" : "",
      region: c.region ?? "",
      subregion: c.subregion ?? "",
      languages: c.languages ? Object.values(c.languages).join(", ") : "",
      population: typeof c.population === "number" ? c.population : 0,
    };
  } catch {
    return null;
  }
}
```
Note: `fullText=true` requires the exact common name. If map names differ from REST Countries names, a small alias map may be needed later — out of scope for this task; failures degrade to name-only tooltip.

- [ ] **Step 2: Commit**
```bash
git add apps/web/lib/countries.ts
git commit -m "feat(web): add REST Countries facts client"
```

---

### Task 5: Exa news library

**Files:**
- Create: `apps/web/lib/exa.ts`

**Interfaces:**
- Produces:
  - `type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string }`
  - `async function fetchCyberNews(country: string): Promise<NewsItem[]>` — calls Exa, returns [] on missing key / failure.

- [ ] **Step 1: `apps/web/lib/exa.ts`**
```ts
export type NewsItem = {
  title: string;
  source: string;
  url: string;
  publishedAt: string; // ISO
  snippet: string;
};

function ninetyDaysAgoISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 90);
  return d.toISOString();
}

// Exa /search — server-only (uses EXA_API_KEY). Returns [] on any failure.
export async function fetchCyberNews(country: string): Promise<NewsItem[]> {
  const key = process.env.EXA_API_KEY;
  if (!key) return [];
  try {
    const res = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key },
      body: JSON.stringify({
        query: `cybersecurity attack breach ransomware data leak ${country}`,
        category: "news",
        type: "auto",
        numResults: 10,
        startPublishedDate: ninetyDaysAgoISO(),
        contents: { text: { maxCharacters: 300 } },
      }),
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { results?: any[] };
    return (data.results ?? [])
      .filter((r) => r.url && r.title)
      .map((r) => ({
        title: r.title as string,
        source: hostname(r.url as string),
        url: r.url as string,
        publishedAt: (r.publishedDate as string) ?? new Date().toISOString(),
        snippet: ((r.text as string) ?? "").trim().slice(0, 300),
      }));
  } catch {
    return [];
  }
}

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}
```

- [ ] **Step 2: Commit**
```bash
git add apps/web/lib/exa.ts
git commit -m "feat(web): add Exa cyber-news client"
```

---

### Task 6: API routes (DB-first) + freshness test

**Files:**
- Create: `apps/web/lib/freshness.ts`
- Create: `apps/web/lib/freshness.test.ts`
- Create: `apps/web/app/api/news/route.ts`
- Create: `apps/web/app/api/country/route.ts`
- Create: `apps/web/vitest.config.ts`

**Interfaces:**
- Consumes: `prisma` from `@cybersherlock/db`; `fetchCyberNews` (Task 5); `fetchCountryFacts` (Task 4).
- Produces:
  - `function isFresh(fetchedAt: Date | null, maxAgeMs: number): boolean` — the single non-trivial decision, unit-tested.
  - `GET /api/news?country=<name>` → `{ items: NewsItem[], stale: boolean }`
  - `GET /api/country?name=<name>` → `CountryFacts | { name: string }` (name-only when facts unavailable)

- [ ] **Step 1: Write failing test — `apps/web/lib/freshness.test.ts`**
```ts
import { describe, it, expect } from "vitest";
import { isFresh } from "./freshness";

const DAY = 24 * 60 * 60 * 1000;

describe("isFresh", () => {
  it("null (no rows) is never fresh", () => {
    expect(isFresh(null, DAY)).toBe(false);
  });
  it("row fetched just now is fresh", () => {
    expect(isFresh(new Date(), DAY)).toBe(true);
  });
  it("row older than window is stale", () => {
    expect(isFresh(new Date(Date.now() - 2 * DAY), DAY)).toBe(false);
  });
  it("row inside window is fresh", () => {
    expect(isFresh(new Date(Date.now() - DAY / 2), DAY)).toBe(true);
  });
});
```

- [ ] **Step 2: `apps/web/vitest.config.ts`**
```ts
import { defineConfig } from "vitest/config";
export default defineConfig({ test: { environment: "node" } });
```

- [ ] **Step 3: Run test, verify it fails**
```bash
pnpm --filter web test
```
Expected: FAIL — cannot find module `./freshness` / `isFresh` not defined.

- [ ] **Step 4: Implement `apps/web/lib/freshness.ts`**
```ts
export function isFresh(fetchedAt: Date | null, maxAgeMs: number): boolean {
  if (!fetchedAt) return false;
  return Date.now() - fetchedAt.getTime() < maxAgeMs;
}

export const NEWS_MAX_AGE_MS = 24 * 60 * 60 * 1000;
export const COUNTRY_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
```

- [ ] **Step 5: Run test, verify passes**
```bash
pnpm --filter web test
```
Expected: PASS (4 tests).

- [ ] **Step 6: `apps/web/app/api/news/route.ts`**
```ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";
import { fetchCyberNews } from "@/lib/exa";
import { isFresh, NEWS_MAX_AGE_MS } from "@/lib/freshness";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const country = req.nextUrl.searchParams.get("country")?.trim();
  if (!country) return NextResponse.json({ error: "country required" }, { status: 400 });

  const rows = await prisma.article.findMany({
    where: { country },
    orderBy: { publishedAt: "desc" },
    take: 10,
  });
  const newest = rows[0]?.fetchedAt ?? null;

  if (isFresh(newest, NEWS_MAX_AGE_MS)) {
    return NextResponse.json({ items: rows.map(toItem), stale: false });
  }

  const fetched = await fetchCyberNews(country);
  if (fetched.length === 0) {
    // Exa gave nothing — serve whatever we have (possibly stale), never crash.
    return NextResponse.json({ items: rows.map(toItem), stale: rows.length > 0 });
  }

  await Promise.all(
    fetched.map((n) =>
      prisma.article.upsert({
        where: { url: n.url },
        create: {
          country,
          title: n.title,
          source: n.source,
          url: n.url,
          publishedAt: new Date(n.publishedAt),
          snippet: n.snippet,
        },
        update: { fetchedAt: new Date(), snippet: n.snippet, title: n.title },
      })
    )
  );

  const refreshed = await prisma.article.findMany({
    where: { country },
    orderBy: { publishedAt: "desc" },
    take: 10,
  });
  return NextResponse.json({ items: refreshed.map(toItem), stale: false });
}

function toItem(a: { title: string; source: string; url: string; publishedAt: Date; snippet: string }) {
  return {
    title: a.title,
    source: a.source,
    url: a.url,
    publishedAt: a.publishedAt.toISOString(),
    snippet: a.snippet,
  };
}
```

- [ ] **Step 7: `apps/web/app/api/country/route.ts`**
```ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";
import { fetchCountryFacts } from "@/lib/countries";
import { isFresh, COUNTRY_MAX_AGE_MS } from "@/lib/freshness";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name")?.trim();
  if (!name) return NextResponse.json({ error: "name required" }, { status: 400 });

  const row = await prisma.country.findUnique({ where: { name } });
  if (row && isFresh(row.fetchedAt, COUNTRY_MAX_AGE_MS)) {
    return NextResponse.json(strip(row));
  }

  const facts = await fetchCountryFacts(name);
  if (!facts) {
    // Degrade to name-only (or the stale row if we have one).
    return NextResponse.json(row ? strip(row) : { name });
  }

  const saved = await prisma.country.upsert({
    where: { name },
    create: { ...facts, fetchedAt: new Date() },
    update: { ...facts, fetchedAt: new Date() },
  });
  return NextResponse.json(strip(saved));
}

function strip(c: { fetchedAt: Date } & Record<string, unknown>) {
  const { fetchedAt, ...rest } = c;
  return rest;
}
```

- [ ] **Step 8: Commit**
```bash
git add apps/web/lib/freshness.ts apps/web/lib/freshness.test.ts apps/web/vitest.config.ts apps/web/app/api
git commit -m "feat(web): add db-first news and country routes with freshness test"
```

---

### Task 7: ThreatMap component

**Files:**
- Create: `apps/web/components/ThreatMap.tsx`

**Interfaces:**
- Consumes: `react-simple-maps`. World topojson from CDN: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json`. Country name at `geo.properties.name`.
- Produces:
  - `<ThreatMap onSelect={(name: string) => void} onHover={(name: string | null, x: number, y: number) => void} selected={string | null} />`

- [ ] **Step 1: `apps/web/components/ThreatMap.tsx`**
```tsx
"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Props = {
  onSelect: (name: string) => void;
  onHover: (name: string | null, x: number, y: number) => void;
  selected: string | null;
};

export default function ThreatMap({ onSelect, onHover, selected }: Props) {
  return (
    <div className="relative w-full">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const isSelected = name === selected;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelect(name)}
                  onMouseMove={(e) => onHover(name, e.clientX, e.clientY)}
                  onMouseLeave={() => onHover(null, 0, 0)}
                  style={{
                    default: {
                      fill: isSelected ? "#dc2626" : "#cbd5e1",
                      stroke: "#ffffff",
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: { fill: "#f87171", outline: "none", cursor: "pointer" },
                    pressed: { fill: "#dc2626", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
```
Note: `countries-110m.json` uses `properties.name` (e.g. "United States of America"). Keep this as the single country-name source so news/country lookups stay consistent.

- [ ] **Step 2: Commit**
```bash
git add apps/web/components/ThreatMap.tsx
git commit -m "feat(web): add interactive ThreatMap"
```

---

### Task 8: CountryTooltip + NewsDrawer components

**Files:**
- Create: `apps/web/components/CountryTooltip.tsx`
- Create: `apps/web/components/NewsDrawer.tsx`

**Interfaces:**
- Consumes: `/api/country?name=`, `/api/news?country=`.
- Produces:
  - `<CountryTooltip name={string | null} x={number} y={number} />`
  - `<NewsDrawer country={string | null} onClose={() => void} />`

- [ ] **Step 1: `apps/web/components/CountryTooltip.tsx`**
```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Facts = {
  name: string;
  flag?: string;
  capital?: string;
  region?: string;
  subregion?: string;
  languages?: string;
  population?: number;
};

export default function CountryTooltip({ name, x, y }: { name: string | null; x: number; y: number }) {
  const [facts, setFacts] = useState<Facts | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!name) {
      setFacts(null);
      return;
    }
    // debounce quick mouse sweeps
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetch(`/api/country?name=${encodeURIComponent(name)}`)
        .then((r) => r.json())
        .then((d) => setFacts(d))
        .catch(() => setFacts({ name }));
    }, 150);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [name]);

  if (!name) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-xs rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-lg"
      style={{ left: x + 14, top: y + 14 }}
    >
      <div className="font-semibold">
        {facts?.flag ? `${facts.flag} ` : ""}
        {name}
      </div>
      {facts?.capital && <div className="text-slate-600">Capital: {facts.capital}</div>}
      {facts?.region && (
        <div className="text-slate-600">
          Region: {facts.region}
          {facts.subregion ? ` · ${facts.subregion}` : ""}
        </div>
      )}
      {facts?.languages && <div className="text-slate-600">Languages: {facts.languages}</div>}
      {typeof facts?.population === "number" && facts.population > 0 && (
        <div className="text-slate-600">Population: {facts.population.toLocaleString()}</div>
      )}
      <div className="mt-1 text-xs text-red-600">Click to see recent cyber incidents →</div>
    </div>
  );
}
```

- [ ] **Step 2: `apps/web/components/NewsDrawer.tsx`**
```tsx
"use client";

import { useEffect, useState } from "react";

type NewsItem = { title: string; source: string; url: string; publishedAt: string; snippet: string };

export default function NewsDrawer({ country, onClose }: { country: string | null; onClose: () => void }) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [stale, setStale] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;
    setLoading(true);
    setItems([]);
    fetch(`/api/news?country=${encodeURIComponent(country)}`)
      .then((r) => r.json())
      .then((d) => {
        setItems(d.items ?? []);
        setStale(!!d.stale);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, [country]);

  const open = !!country;

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/20" onClick={onClose} />}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">{country} — recent cyber incidents</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900" aria-label="Close">
            ✕
          </button>
        </div>

        <div className="p-4">
          {stale && (
            <p className="mb-3 rounded bg-amber-50 px-3 py-2 text-xs text-amber-700">
              Showing archived incidents — live results were unavailable.
            </p>
          )}
          {loading && <p className="text-slate-500">Loading…</p>}
          {!loading && items.length === 0 && (
            <p className="text-slate-500">No recent incidents found. That doesn't mean safe — just unreported here.</p>
          )}
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.url} className="border-b pb-3 last:border-0">
                <a href={it.url} target="_blank" rel="noopener noreferrer" className="font-medium text-red-700 hover:underline">
                  {it.title}
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  {it.source} · {new Date(it.publishedAt).toLocaleDateString()}
                </div>
                {it.snippet && <p className="mt-1 text-sm text-slate-600">{it.snippet}</p>}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
```

- [ ] **Step 3: Commit**
```bash
git add apps/web/components/CountryTooltip.tsx apps/web/components/NewsDrawer.tsx
git commit -m "feat(web): add CountryTooltip and NewsDrawer"
```

---

### Task 9: Lesson content + page assembly

**Files:**
- Create: `apps/web/components/Lesson.tsx`
- Create: `apps/web/components/MapSection.tsx`
- Modify: `apps/web/app/page.tsx` (replace placeholder)

**Interfaces:**
- Consumes: `ThreatMap`, `CountryTooltip`, `NewsDrawer`, `Lesson`.
- `MapSection` is a client component owning selection + hover state; `page.tsx` stays a server component rendering `Lesson` then `MapSection`.

- [ ] **Step 1: `apps/web/components/Lesson.tsx`** (real content)
```tsx
export default function Lesson() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 prose-slate">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Cybersecurity · Lesson 1</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Why cybersecurity matters</h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Every hospital, power grid, bank, and phone now runs on software — and software can be attacked.
        Cybersecurity is the practice of defending those systems from people who want to steal, disrupt, or
        destroy what they hold. It is not a niche IT concern; it is the difference between a functioning
        society and one whose lights, records, and money can be switched off by a stranger.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">The main kinds of threat</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li><strong>Ransomware.</strong> Attackers encrypt an organization's data and demand payment. Hospitals have turned away patients; cities have lost access to their own records for weeks.</li>
        <li><strong>Data breaches.</strong> Personal data — passwords, health records, financial details — is stolen and sold. Once leaked, it cannot be un-leaked.</li>
        <li><strong>Supply-chain attacks.</strong> Instead of attacking a target directly, attackers compromise software the target trusts, reaching thousands of victims at once.</li>
        <li><strong>State-sponsored attacks.</strong> Governments target other nations' infrastructure, elections, and companies — sometimes as a prelude to, or substitute for, physical conflict.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">This is not hypothetical</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        The best way to understand the stakes is to look at what has already happened. The map below is live:
        pick any country and you'll see recent, real cybersecurity incidents that hit it — the breaches,
        outages, and attacks that made the news. Hover to learn about a country; click to see what it has faced.
      </p>
    </article>
  );
}
```

- [ ] **Step 2: `apps/web/components/MapSection.tsx`**
```tsx
"use client";

import { useState } from "react";
import ThreatMap from "./ThreatMap";
import CountryTooltip from "./CountryTooltip";
import NewsDrawer from "./NewsDrawer";

export default function MapSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<{ name: string | null; x: number; y: number }>({ name: null, x: 0, y: 0 });

  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-2xl font-semibold">The live global threat map</h2>
        <p className="mb-6 text-center text-slate-600">Hover a country for the facts. Click it for recent cyber incidents.</p>
        <ThreatMap
          selected={selected}
          onSelect={setSelected}
          onHover={(name, x, y) => setHover({ name, x, y })}
        />
      </div>
      <CountryTooltip name={hover.name} x={hover.x} y={hover.y} />
      <NewsDrawer country={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
```

- [ ] **Step 3: Replace `apps/web/app/page.tsx`**
```tsx
import Lesson from "@/components/Lesson";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main>
      <Lesson />
      <MapSection />
    </main>
  );
}
```

- [ ] **Step 4: Verify build + manual run**
```bash
pnpm --filter web build
```
Expected: build succeeds (needs `DATABASE_URL` for `prisma generate`). Then `pnpm --filter web dev`, open http://localhost:3000: lesson renders, map renders, hovering shows a tooltip, clicking opens the drawer. (Live news requires `EXA_API_KEY` + `db push` run against the DB; without them the drawer shows the empty state — not a crash.)

- [ ] **Step 5: Commit**
```bash
git add apps/web/components/Lesson.tsx apps/web/components/MapSection.tsx apps/web/app/page.tsx
git commit -m "feat(web): assemble lesson page with live threat map"
```

---

### Task 10: README + final verification

**Files:**
- Create: `README.md`

- [ ] **Step 1: `README.md`** — document: prerequisites (pnpm, a Postgres URL, Exa key), setup (`pnpm install`, copy `.env.example` → `.env`, `pnpm --filter @cybersherlock/db db:push`, `pnpm dev`), and how the DB-first caching works.

- [ ] **Step 2: Full check**
```bash
pnpm install
pnpm --filter web test
pnpm --filter web build
```
Expected: tests pass, build succeeds.

- [ ] **Step 3: Commit**
```bash
git add README.md
git commit -m "docs: add README with setup instructions"
```

---

## Notes for implementers

- The only unit test is `freshness.test.ts` — the spec calls for exactly one check on the non-trivial route logic. Do not add test frameworks/fixtures beyond Vitest.
- If REST Countries names diverge from `world-atlas` `properties.name`, tooltips degrade to name-only gracefully — acceptable; do not build a full alias table unless asked.
- Keep API keys server-side. `lib/exa.ts` and both routes are the only places `EXA_API_KEY` appears. `DATABASE_URL` only in `packages/db`.
