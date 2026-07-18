import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@cybersherlock/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const country = req.nextUrl.searchParams.get("country")?.trim();
  const topic = req.nextUrl.searchParams.get("topic")?.trim() ?? "email-phishing";
  if (!country) return NextResponse.json({ error: "country required" }, { status: 400 });

  try {
    const incidents = await prisma.incident.findMany({
      where: { country, topic },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ incidents });
  } catch {
    return NextResponse.json({ incidents: [] });
  }
}
