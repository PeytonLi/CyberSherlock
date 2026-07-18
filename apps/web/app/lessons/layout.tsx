import ArticlesSidebar from "@/components/ArticlesSidebar";

export default function LessonsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row-reverse">
      <ArticlesSidebar />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
