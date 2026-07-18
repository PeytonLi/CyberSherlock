export default function Lesson() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 prose-slate">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#2563eb]">AGI Strategy · Threat Landscape</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">The cybersecurity dimension of AI risk</h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Advanced AI systems will not operate in a vacuum — they will run on the same networked
        infrastructure that is already under constant attack. Understanding the cybersecurity
        landscape is essential to any serious AI strategy: the same vulnerabilities that let
        attackers breach hospitals and power grids today could let adversaries compromise or
        steal tomorrow&apos;s most powerful AI systems.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">Attack vectors that matter for AI</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li><strong>Model theft.</strong> Attackers exfiltrate trained models and weights — weeks or months of compute investment, stolen in minutes.</li>
        <li><strong>Data poisoning.</strong> Training data is manipulated to introduce backdoors or biases that surface only after deployment.</li>
        <li><strong>Supply-chain attacks.</strong> Instead of attacking a target directly, attackers compromise the tools, libraries, or hardware the AI system depends on.</li>
        <li><strong>State-sponsored intrusions.</strong> Governments target AI labs for competitive advantage — stealing research, models, and strategic plans.</li>
        <li><strong>Infrastructure sabotage.</strong> The data centers, power grids, and networks that AI systems rely on are themselves vulnerable.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">This is already happening</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        The map below is a live feed of real cybersecurity incidents worldwide. Every dot
        represents a breach, ransomware attack, or data theft that made the news. If AI
        systems inherit the same infrastructure — and they will — then every one of these
        incidents is a preview of the threat surface for advanced AI. Hover to learn about
        a country; click to see what it has faced.
      </p>
    </article>
  );
}
