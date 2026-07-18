import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, getAdjacentLessons } from "@/lib/curriculum-data";
import LessonContent from "@/components/LessonContent";
import MapSection from "@/components/MapSection";

type Props = {
  params: Promise<{ unit: string; lesson: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { unit, lesson } = await params;
  const data = getLesson(parseInt(unit), parseInt(lesson));
  if (!data) return { title: "Lesson not found" };
  return { title: `${data.title} - AGI Strategy` };
}

export default async function LessonPage({ params }: Props) {
  const { unit: unitStr, lesson: lessonStr } = await params;
  const unit = parseInt(unitStr);
  const lesson = parseInt(lessonStr);

  const data = getLesson(unit, lesson);
  if (!data) notFound();

  const { prev, next } = getAdjacentLessons(unit, lesson);

  return (
    <div>
      <LessonContent lesson={data} unitTitle={getUnitTitle(unit)} />
      {data.showThreatMap && <MapSection />}
      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 max-w-3xl mx-auto">
        <div>
          {prev ? (
            <Link
              href={`/curriculum/${prev.unit}/${prev.lesson}`}
              className="text-sm font-medium text-[#2563eb] hover:underline"
            >
              &larr; {prev.title}
            </Link>
          ) : (
            <span className="text-sm text-slate-300">Start of course</span>
          )}
        </div>
        <div>
          {next ? (
            <Link
              href={`/curriculum/${next.unit}/${next.lesson}`}
              className="text-sm font-medium text-[#2563eb] hover:underline"
            >
              {next.title} &rarr;
            </Link>
          ) : (
            <span className="text-sm text-slate-300">End of course</span>
          )}
        </div>
      </div>
    </div>
  );
}

function getUnitTitle(unit: number): string {
  const titles: Record<number, string> = {
    1: "Racing to a Better Future",
    2: "Drivers of AI Progress",
    3: "Pathways to Harm",
    4: "Defence in Depth",
    5: "Start Contributing",
  };
  return titles[unit] ?? "";
}
