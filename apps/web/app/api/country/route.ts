import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";
import { fetchCountryFacts } from "@/lib/countries";
import { isFresh, COUNTRY_MAX_AGE_MS } from "@/lib/freshness";

export const dynamic = "force-dynamic";

const dbAvailable = !!process.env.DATABASE_URL;

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name")?.trim();
  if (!name) return NextResponse.json({ error: "name required" }, { status: 400 });

  // When no DATABASE_URL, skip the DB and fetch live every time.
  if (!dbAvailable) {
    const facts = await fetchCountryFacts(name);
    return NextResponse.json(facts ?? { name });
  }

  try {
    const row = await prisma.country.findUnique({ where: { name } });
    if (row && isFresh(row.fetchedAt, COUNTRY_MAX_AGE_MS)) {
      return NextResponse.json(strip(row));
    }

    const facts = await fetchCountryFacts(name);
    if (!facts) {
      return NextResponse.json(row ? strip(row) : { name });
    }

    const saved = await prisma.country.upsert({
      where: { name },
      create: { ...facts, fetchedAt: new Date() },
      update: { ...facts, fetchedAt: new Date() },
    });
    return NextResponse.json(strip(saved));
  } catch {
    // DB unavailable at runtime — degrade to live fetch.
    const facts = await fetchCountryFacts(name);
    return NextResponse.json(facts ?? { name });
  }
}

function strip(c: { fetchedAt: Date } & Record<string, unknown>) {
  const { fetchedAt, ...rest } = c;
  return rest;
}
