import CourseDetailPage from "@/components/course-detail-page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-slate-600">Loading course...</div>}>
      <CourseDetailPage />
    </Suspense>
  );
}
