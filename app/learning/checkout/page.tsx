import LearningCheckoutPage from "@/components/learning-checkout-page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-slate-600">Loading checkout...</div>}>
      <LearningCheckoutPage />
    </Suspense>
  );
}
