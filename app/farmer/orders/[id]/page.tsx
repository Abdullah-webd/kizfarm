import FarmerOrderDetailPage from "@/components/farmer-order-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <FarmerOrderDetailPage id={id} />;
}
