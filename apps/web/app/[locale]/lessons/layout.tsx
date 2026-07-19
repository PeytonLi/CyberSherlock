import ArticlesSidebar from "@/components/ArticlesSidebar";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LessonsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className={`flex ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
      <ArticlesSidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
