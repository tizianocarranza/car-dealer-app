export async function fetchData() {
  let response = await fetch(
    `${process.env.API_BASE_URL}/GetMakesForVehicleType/car?format=json`,
  );
  const data = await response.json();
  return data;
}

export async function fetchVehiclesModel(makeId: string, year: string) {
  try {
    let response = await fetch(
      `${process.env.API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching");
  }
}

export function getModelYears() {
  const currentYear = new Date().getFullYear();
  const modelYears: number[] = [];
  for (let year = 2015; year <= currentYear; year++) {
    modelYears.push(year);
  }
  return modelYears;
}
