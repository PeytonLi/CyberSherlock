import ArticlesSidebar from "@/components/ArticlesSidebar";

export default function LessonsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row-reverse">
      <ArticlesSidebar />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
