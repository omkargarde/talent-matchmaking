import ProfileDetails from "@/components/custom/profileDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProfileDetails id={id} />;
}
