export type CountryFacts = {
  name: string;
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  languages: string;
  population: number;
};

// REST Countries v3.1 — free, no key. Tries exact match first, then partial.
export async function fetchCountryFacts(name: string): Promise<CountryFacts | null> {
  const fields = "?fields=name,flag,capital,region,subregion,languages,population";

  // Try exact match first (handles most names correctly).
  let res = await safeFetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=name,flag,capital,region,subregion,languages,population`
  );

  // Fall back to partial match (e.g. "Russia" matches "Russian Federation").
  if (!res) {
    res = await safeFetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}${fields}`
    );
  }

  if (!res) return null;
  const c = res[0];
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
}

async function safeFetch(url: string): Promise<any[] | null> {
  try {
    const r = await fetch(url, { next: { revalidate: 0 } });
    if (!r.ok) return null;
    return (await r.json()) as any[];
  } catch {
    return null;
  }
}
