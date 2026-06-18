import FarmerProductDetailPage from "@/components/farmer-product-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <FarmerProductDetailPage id={id} />;
}

