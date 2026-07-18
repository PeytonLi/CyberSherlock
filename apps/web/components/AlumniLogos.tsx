const LOGOS = [
  "Anthropic", "DeepMind", "OpenAI", "UK AISI",
  "US AISI", "METR", "Apollo Research", "Conjecture",
  "Redwood Research", "Arc Evals", "Epoch AI", "RAND",
  "CSET", "GovAI", "Centre for the Governance of AI",
  "FHI", "Mila", "Stanford", "MIT", "Oxford",
];

export default function AlumniLogos() {
  return (
    <section className="border-b border-slate-200 bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center mb-6">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
          Our 8,000+ alumni work at
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-10 px-6">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-lg font-semibold text-slate-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
