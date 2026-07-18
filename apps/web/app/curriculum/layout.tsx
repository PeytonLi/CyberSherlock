import CurriculumSidebar from "@/components/CurriculumSidebar";

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <CurriculumSidebar />
      <div className="flex-1 min-w-0 overflow-auto">
        {children}
      </div>
    </div>
  );
}

