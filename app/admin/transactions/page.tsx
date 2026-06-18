import TransactionListPage from "@/components/transaction-list-page";
import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <TransactionListPage />
    </AdminGuard>
  );
}
