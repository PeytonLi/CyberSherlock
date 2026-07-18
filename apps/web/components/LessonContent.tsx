import type { Lesson } from "@/lib/curriculum-data";

type Props = {
  lesson: Lesson;
  unitTitle: string;
};

export default function LessonContent({ lesson, unitTitle }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#2563eb]">
        Unit {lesson.unit}: {unitTitle}
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0a1628]">
        {lesson.title}
      </h1>
      {lesson.duration && (
        <span className="mt-3 inline-block rounded-full bg-[#f8fafc] border border-slate-200 px-3 py-1 text-sm text-slate-500">
          {lesson.duration}
        </span>
      )}

      {lesson.resources && lesson.resources.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#0a1628] mb-4">
            Resources ({lesson.duration})
          </h2>
          <div className="space-y-4">
            {lesson.resources.map((r, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                <a
                  href={r.listenUrl ?? "#"}
                  target={r.listenUrl ? "_blank" : undefined}
                  rel={r.listenUrl ? "noopener noreferrer" : undefined}
                  className="font-medium text-[#2563eb] hover:underline"
                >
                  {r.title}
                </a>
                <div className="mt-1 text-sm text-slate-500">
                  {r.authors} &middot; {r.year} &middot; {r.minutes} min
                  {r.listenUrl && (
                    <span className="ml-2 text-[#2563eb] text-xs">&#9654; Listen to article</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {lesson.hasExercises && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#0a1628] mb-4">Exercises</h2>
          <div className="rounded-lg border border-dashed border-slate-300 bg-[#f8fafc] p-6 text-center text-slate-500 text-sm">
            Complete the readings above, then discuss with your cohort during the facilitated Zoom session.
          </div>
        </section>
      )}

      {lesson.optionalResources && lesson.optionalResources.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#0a1628] mb-4">Optional Resources</h2>
          <div className="space-y-3">
            {lesson.optionalResources.map((r, i) => (
              <div key={i} className="rounded-lg border border-slate-100 p-3 hover:shadow-sm transition-shadow">
                <a
                  href={r.listenUrl ?? "#"}
                  target={r.listenUrl ? "_blank" : undefined}
                  rel={r.listenUrl ? "noopener noreferrer" : undefined}
                  className="font-medium text-[#2563eb] hover:underline text-sm"
                >
                  {r.title}
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  {r.authors} &middot; {r.year} &middot; {r.minutes} min
                  {r.listenUrl && (
                    <span className="ml-2 text-[#2563eb]">&#9654; Listen</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
