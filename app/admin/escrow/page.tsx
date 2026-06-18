import EscrowManagementPage from "@/components/escrow-management-page";
import AdminGuard from "@/components/admin-guard";
export default function Page() {
  return (
    <AdminGuard>
      <EscrowManagementPage />
    </AdminGuard>
  );
}
