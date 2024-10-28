"use client";

import React from "react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { getModelYears } from "../data/fetchData";

function Dropdown({
  makes,
}: {
  makes: { MakeName: string; MakeId: number }[];
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const [selectedCarName, setSelectedCarName] = useState<string | null>(null);
  const [selectedCarYear, setSelectedCarYear] = useState<number | null>(null);

  const modelYears: number[] = getModelYears();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectCar = (makeName: string, makeId: number) => {
    setSelectedCarName(makeName === selectedCarName ? null : makeName);
    setSelectedCarId(makeId === selectedCarId ? null : makeId);
    setSelectedCarYear(null);
  };

  const selectYear = (makeYear: number) =>
    setSelectedCarYear(makeYear === selectedCarYear ? null : makeYear);

  return (
    <div className="flex flex-col gap-10 items-center">
      <ul className="flex flex-col gap-5 items-center rounded-md w-48 shadow-gray-400 shadow-md text-sm py-5 px-2">
        <div className="w-full flex flex-col gap-2 items-center text-xs">
          <p>
            <span className="font-bold">Selected car:</span>{" "}
            {selectedCarName || "none"}
          </p>
          <p>
            <span className="font-bold">Year:</span> {selectedCarYear || "none"}
          </p>
        </div>
        <button
          className={clsx({
            ["rounded-md p-2 w-36 font-bold border border-gray-300"]: true,
            ["text-red-400"]: dropdownOpen,
            ["text-green-400"]: !dropdownOpen,
          })}
          onClick={toggleDropdown}
        >
          {!dropdownOpen ? "Watch all cars" : "Close"}
        </button>
        {dropdownOpen && (
          <div className="p-2 py-5">
            <div className="flex flex-col h-52 w-full gap-10 py-5 px-2 overflow-y-scroll">
              {makes.map((make: { MakeName: string; MakeId: number }) => (
                <li
                  key={make.MakeId}
                  className="flex flex-col gap-5 text-sm border-b border-gray-200 pl-2 list-none transition-all cursor-pointer"
                >
                  <button
                    className="w-full text-left"
                    onClick={() => selectCar(make.MakeName, make.MakeId)}
                  >
                    {make.MakeName}
                  </button>
                  {selectedCarName === make.MakeName && (
                    <ul className="flex flex-col gap-3 text-xs px-5 pt-2 pb-5">
                      {modelYears.map((year) => (
                        <li
                          key={year}
                          className="pt-2 pb-1 pl-2 border-b border-b-gray-200"
                          onClick={() => selectYear(year)}
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </div>
          </div>
        )}
        <Link
          href={`result/${selectedCarId}/${selectedCarYear}`}
          className={clsx({
            ["rounded-md p-2 w-36 font-bold border border-gray-300 text-blue-900 text-center"]:
              true,
            ["text-opacity-30 pointer-events-none"]: !(
              selectedCarName && selectedCarYear
            ),
            ["text-opacity-100 pointer-events-auto"]:
              selectedCarName && selectedCarYear,
          })}
          onClick={() => {}}
        >
          Next
        </Link>
      </ul>
    </div>
  );
}

export default Dropdown;
