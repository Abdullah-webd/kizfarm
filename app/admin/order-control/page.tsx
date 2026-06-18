import OrderControlPage from "@/components/order-control-page";
import AdminGuard from "@/components/admin-guard";
export default function Page() {
  return (
    <AdminGuard>
      <OrderControlPage />
    </AdminGuard>
  );
}
