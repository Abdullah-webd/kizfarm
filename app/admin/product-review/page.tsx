import ProductReviewPage from "@/components/product-review-page";
import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <ProductReviewPage />
    </AdminGuard>
  );
}
