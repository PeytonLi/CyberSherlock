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
