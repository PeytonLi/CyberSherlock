# CyberSherlock

Why cybersecurity matters — an interactive lesson with a live global threat map.

Built with [Next.js](https://nextjs.org), [Prisma](https://prisma.io), [react-simple-maps](https://react-simple-maps.com), and [Tailwind CSS](https://tailwindcss.com).

## Prerequisites

- Node.js >= 18.18
- [pnpm](https://pnpm.io) 9+
- A PostgreSQL database (provide its connection string as `DATABASE_URL`)
- An [Exa](https://exa.ai) API key (`EXA_API_KEY`) — used to fetch recent cybersecurity news. Without it the app still works but shows an empty news drawer.

## Getting started

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL and EXA_API_KEY

# 3. Push the Prisma schema to your database
pnpm --filter @cybersherlock/db db:push

# 4. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## How the DB-first caching works

- **Country facts** (REST Countries v3.1) are cached for **30 days** in the `Country` table. A repeat look-up within that window returns the cached row; after the window expires the row is re-fetched and upserted.
- **Cyber news** (Exa API) is cached for **24 hours** in the `Article` table. Within the window the route returns the 10 most-recent cached articles for that country. After the window the route re-fetches from Exa, upserts results, and returns the refreshed set.

## Running tests

```bash
pnpm test
```

## Project structure

```
cybersherlock/
  apps/web/          # Next.js 15 app (pages, API routes, components)
  packages/db/       # Shared Prisma client + schema
  turbo.json         # Turborepo pipeline
```
