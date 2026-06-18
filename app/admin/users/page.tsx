import UserListPage from "@/components/user-list-page";

import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <UserListPage />
    </AdminGuard>
  );
}
