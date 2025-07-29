export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="m-6">
      <h1 className="text-3xl md:text-2xl">My Post: {id}</h1>
    </div>
  );
}
