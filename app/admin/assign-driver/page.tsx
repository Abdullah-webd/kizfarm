import AssignDriverPage from "@/components/assign-driver-page";

import AdminGuard from '@/components/admin-guard';

export default function Page() {
  return (
    <AdminGuard>
      <AssignDriverPage />
    </AdminGuard>
  );
}
