"use client";
import React, { useEffect } from "react";
import useLineMutations from "../hooks/useLineMutations";
import { LineType } from "@/types/types";
const Home = () => {
  const { getLineQuery } = useLineMutations();
  const { isLoading, data } = getLineQuery;
  console.log("Home page ka data", data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data.response && data.response.length > 0 ? (
        <div>
          {data.response.map((line: LineType) => {
            <>
              <h1>{line.pickupLine}</h1>
              <h1>{line.contributor}</h1>
            </>;
          })}
        </div>
      ) : (
        <>Nothing to show</>
      )}
    </div>
  );
};
export default Home;
