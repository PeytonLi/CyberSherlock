const DETAILS = [
  {
    label: "Options",
    text: "Intensive (~5 days at ~5h/day) or part-time (~5 weeks at ~5h/week). Same content, different pace.",
  },
  {
    label: "Commitment",
    text: "Each day or week, you will: Complete 3 hours of reading and writing, and join ~8 peers in a 2-hour Zoom meeting to discuss the content.",
  },
  {
    label: "Facilitator",
    text: "All discussions will be facilitated by an AI safety expert.",
  },
  {
    label: "Price",
    text: "This course is freely available and operates on a pay-what-you-want model.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8fafc] py-20 border-y border-slate-200" id="curriculum">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] text-center mb-12">
          How the course works
        </h2>
        <div className="space-y-0">
          {DETAILS.map((d, i) => (
            <div
              key={d.label}
              className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-5 ${
                i < DETAILS.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <div className="sm:min-w-[120px] sm:flex-shrink-0">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#2563eb]">
                  {d.label}
                </span>
              </div>
              <p className="text-slate-700 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
