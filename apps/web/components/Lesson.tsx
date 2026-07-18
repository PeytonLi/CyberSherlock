export default function Lesson() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 prose-slate">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Cybersecurity · Lesson 1</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Why cybersecurity matters</h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Every hospital, power grid, bank, and phone now runs on software — and software can be attacked.
        Cybersecurity is the practice of defending those systems from people who want to steal, disrupt, or
        destroy what they hold. It is not a niche IT concern; it is the difference between a functioning
        society and one whose lights, records, and money can be switched off by a stranger.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">The main kinds of threat</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li><strong>Ransomware.</strong> Attackers encrypt an organization's data and demand payment. Hospitals have turned away patients; cities have lost access to their own records for weeks.</li>
        <li><strong>Data breaches.</strong> Personal data — passwords, health records, financial details — is stolen and sold. Once leaked, it cannot be un-leaked.</li>
        <li><strong>Supply-chain attacks.</strong> Instead of attacking a target directly, attackers compromise software the target trusts, reaching thousands of victims at once.</li>
        <li><strong>State-sponsored attacks.</strong> Governments target other nations' infrastructure, elections, and companies — sometimes as a prelude to, or substitute for, physical conflict.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">This is not hypothetical</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        The best way to understand the stakes is to look at what has already happened. The map below is live:
        pick any country and you'll see recent, real cybersecurity incidents that hit it — the breaches,
        outages, and attacks that made the news. Hover to learn about a country; click to see what it has faced.
      </p>
    </article>
  );
}
