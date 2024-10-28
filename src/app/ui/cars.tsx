import React from "react";
import { fetchData } from "../data/fetchData";
import Dropdown from "./dropdown";

async function Cars() {
  const { Results: results } = await fetchData();

  return <Dropdown makes={results} />;
}

export default Cars;
