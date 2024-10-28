import { getModelYears } from "@/app/data/fetchData";
import Loader from "@/app/ui/loader";
import Models from "@/app/ui/models";
import { Suspense } from "react";

export const dynamicParams = false; // true | false,

export async function generateStaticParams() {
  const modelYears: number[] = getModelYears();

  return modelYears.map((year: number) => ({
    year: year.toString(),
  }));
}

/* 
{
  "Count": 1,
  "Message": "Results returned successfully",
  "SearchCriteria": "Make ID:441 | ModelYear:2015",
  "Results": [
    {
      "Make_ID": 441,
      "Make_Name": "TESLA",
      "Model_ID": 1685,
      "Model_Name": "Model S"
    }
  ]
}
*/

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; year: string }>;
}) {
  const { id, year } = await params;

  return (
    <div className="flex flex-col gap-20 items-center">
      <h1 className="text-xl text-center w-full font-bold">
        Static Page generated for: {id}, year: {year}
      </h1>
      <Suspense fallback={<Loader />}>
        <Models id={id} year={year} />
      </Suspense>
    </div>
  );
}
