import RefundManagementPage from "@/components/refund-management-page";
import AdminGuard from "@/components/admin-guard";
export default function Page() {
  return (
    <AdminGuard>
      <RefundManagementPage />
    </AdminGuard>
  );
}
