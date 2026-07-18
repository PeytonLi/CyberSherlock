const BENEFITS = [
  {
    title: "A launchpad for your AI safety career",
    description:
      "You will leave this course with an opinion on which threats matter, early takes on how we could solve these problems, and concrete next steps you can take.",
    icon: "\u{1F680}",
  },
  {
    title: "A clear way to think about the future of AI",
    description:
      "You will analyse the incentives facing AI companies. You will develop kill chains to analyse the threats. And you will apply defense in depth to evaluate and prioritise interventions. You will know enough to hold your own in rooms with experts.",
    icon: "\u{1F9E0}",
  },
  {
    title: "A community of builders",
    description:
      "BlueDot has 7,000+ alumni, with many now working at Anthropic, DeepMind, UK AISI, and dozens of organisations working on a safe transition to advanced AI. You will meet people in the field who can open doors for you and pressure-test your thinking.",
    icon: "\u{1F310}",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#f8fafc] py-20 border-y border-slate-200">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          How this course will benefit you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-semibold text-[#0a1628] mb-3">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
