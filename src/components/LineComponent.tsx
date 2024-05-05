"use client";
import React from "react";
import { LineType } from "@/types/types";
import useLineQuery from "@/hooks/useLineQuery";
const LineComponent = () => {
  const { getLineQuery } = useLineQuery();
  return (
    <div>
      <>
        {getLineQuery.data?.map((line: LineType, index: number) => (
          <>
            <h1 key={index}>{line.pickupLine}</h1>
            <h1 key={index}>{line.contributor}</h1>
          </>
        ))}
      </>
    </div>
  );
};
export default LineComponent;
