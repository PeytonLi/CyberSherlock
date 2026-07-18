/** Same TopoJSON the threat map uses — names must match Geography clicks. */
export const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Topo = {
  objects: {
    countries: {
      geometries: { properties?: { name?: string } }[];
    };
  };
};

export async function listMapCountryNames(): Promise<string[]> {
  const res = await fetch(GEO_URL);
  if (!res.ok) throw new Error(`Failed to load map countries (${res.status})`);
  const topo = (await res.json()) as Topo;
  const names = new Set<string>();
  for (const g of topo.objects.countries.geometries) {
    const name = g.properties?.name?.trim();
    if (name) names.add(name);
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}
