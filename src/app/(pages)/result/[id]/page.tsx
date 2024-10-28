import { fetchData } from "@/app/data/fetchData";

export async function generateStaticParams() {
  const { Results: results } = await fetchData();

  return results.map((make: { MakeId: number }) => ({
    id: make.MakeId.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="">
      <h1 className="text-xl">Static Page generated for: {id}</h1>
    </div>
  );
}
