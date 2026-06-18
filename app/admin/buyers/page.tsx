import AdminBuyerManagementPage from "@/components/admin-buyer-management-page";
import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <AdminBuyerManagementPage />
    </AdminGuard>
  );
}
