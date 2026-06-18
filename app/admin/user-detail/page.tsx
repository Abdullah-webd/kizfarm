import UserDetailPage from "@/components/user-detail-page";

import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <UserDetailPage />
    </AdminGuard>
  );
}
