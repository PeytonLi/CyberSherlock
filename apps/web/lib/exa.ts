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
const TOPIC_QUERIES: Record<string, string> = {
  "critical-infrastructure": "AI cyber attack critical infrastructure power grid hospital water energy",
  "email-phishing": "AI phishing email scam social engineering deepfake",
};

export async function fetchCyberNews(country: string, topic?: string): Promise<NewsItem[]> {
  const key = process.env.EXA_API_KEY;
  if (!key) return [];
  const topicQuery = topic && TOPIC_QUERIES[topic] ? TOPIC_QUERIES[topic] : "AI cyber attack";
  try {
    const res = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key },
      body: JSON.stringify({
        query: `${topicQuery} ${country}`,
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
