const COURSES = [
  {
    title: "Technical AI Safety",
    description: "Interpretability, evals, alignment research. For people ready to work on the technical problems.",
    icon: "\u{1F52C}",
    href: "#",
  },
  {
    title: "AI Governance",
    description: "Policy, institutions, international coordination. For people shaping how these systems get governed.",
    icon: "\u{1F3DB}\uFE0F",
    href: "#",
  },
  {
    title: "Biosecurity",
    description: "Pandemic preparedness, early warning systems, policy. For people building defences against bio risks.",
    icon: "\u{1F6E1}\uFE0F",
    href: "#",
  },
];

const PROGRAMS = [
  {
    title: "Rapid Grants",
    description: "Small, fast funding for concrete AI safety work. Five-minute application, decisions in days, money upfront by default.",
    href: "#",
  },
  {
    title: "Career Transition Grants",
    description: "Funding to enable you to work full-time on impactful AI safety work. Propose your plan and we will back you.",
    href: "#",
  },
];

export default function WhatsNext() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-3">
          What happens after
        </h2>
        <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
          This course is where you get oriented. What comes next depends on you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {COURSES.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-xl border-2 border-slate-200 p-6 hover:border-[#2563eb] hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg text-[#0a1628] group-hover:text-[#2563eb] transition-colors mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.description}</p>
              <span className="text-sm font-medium text-[#2563eb]">Explore the course \u2192</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROGRAMS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-xl border-2 border-slate-200 p-6 hover:border-[#f59e0b] hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-lg text-[#0a1628] group-hover:text-[#f59e0b] transition-colors mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.description}</p>
              <span className="text-sm font-medium text-[#f59e0b]">Explore program \u2192</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
