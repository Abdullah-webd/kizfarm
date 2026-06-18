import FarmerVerificationDetail from "../../../../components/farmer-verification-detail";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <FarmerVerificationDetail id={id} />;
}
