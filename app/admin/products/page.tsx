import AllProductsListPage from "@/components/all-products-list-page";
import AdminGuard from "@/components/admin-guard";
export default function Page() {
  return (
    <AdminGuard>
      <AllProductsListPage />
    </AdminGuard>
  );
}
