export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f1d35] to-[#0a1628] text-white">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#60a5fa] mb-4">
          Cohort-based Course
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          AGI Strategy
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-slate-300">
          Optimistic and concerned about AI&apos;s trajectory? Want to do something about it?
          Start here. 25 hours to understand the strategic landscape, find your entry point,
          and get moving.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://bluedot.org/courses/agi-strategy#apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-600/25"
          >
            Apply by 20 Jul
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-transparent px-8 py-3.5 text-base font-medium text-white hover:border-slate-300 hover:text-slate-100 transition-colors"
          >
            Browse curriculum
          </a>
        </div>
      </div>
    </section>
  );
}
