import React from "react";
import { fetchVehiclesModel } from "../data/fetchData";
import { notFound } from "next/navigation";

async function Models({ id, year }: { id: string; year: string }) {
  const { Results: results } = await fetchVehiclesModel(id, year);

  if (!results) return notFound();
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center w-full p-5">
      {results.map(
        (
          make: { Make_Name: string; Model_Name: string; Model_Id: number },
          index: number,
        ) => (
          <div
            className="flex flex-col w-36 h-44 items-centerm justify-center gap-5 p-5 rounded-md shadow-md shadow-gray-400 text-sm"
            key={`${id}-${index}`}
          >
            <h1 className="text-center ">{make.Make_Name}</h1>
            <p className="text-center">{make.Model_Name}</p>
          </div>
        ),
      )}
    </div>
  );
}

export default Models;
