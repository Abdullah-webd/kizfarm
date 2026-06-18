import EscrowDetailPage from "@/components/escrow-detail-page";
import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <EscrowDetailPage />
    </AdminGuard>
  );
}
