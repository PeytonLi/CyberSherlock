import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function CurriculumPage() {
  redirect("/curriculum/1/1");
}
