import ArticleList from "@/components/ArticleList";
import MapSection from "@/components/MapSection";
import ArticlesSidebar from "@/components/ArticlesSidebar";

export default function ArticlesPage() {
  return (
    <div className="flex flex-row-reverse">
      <ArticlesSidebar />
      <main className="flex-1 min-w-0">
        <ArticleList />
        <MapSection />
      </main>
    </div>
  );
}
