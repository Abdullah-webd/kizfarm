import DriverManagementPage from "@/components/driver-management-page";

import AdminGuard from "@/components/admin-guard";

export default function Page() {
  return (
    <AdminGuard>
      <DriverManagementPage />
    </AdminGuard>
  );
}
