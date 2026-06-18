import AllFarmersListPage from "@/components/all-farmers-list-page";
import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <AllFarmersListPage />
    </AdminGuard>
  );
}
