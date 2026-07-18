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
