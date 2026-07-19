import ArticleList from "@/components/ArticleList";
import MapSection from "@/components/MapSection";
import ArticlesSidebar from "@/components/ArticlesSidebar";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col md:flex-row-reverse">
      <ArticlesSidebar />
      <div className="flex-1 min-w-0">
        <ArticleList />
        <MapSection topic="critical-infrastructure" />
      </div>
    </div>
  );
}
