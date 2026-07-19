import ArticleList from "@/components/ArticleList";
import MapSection from "@/components/MapSection";
import ArticlesSidebar from "@/components/ArticlesSidebar";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className={`flex ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
      <ArticlesSidebar />
      <main className="flex-1 min-w-0">
        <ArticleList />
        <MapSection topic="critical-infrastructure" />
      </main>
    </div>
  );
}
