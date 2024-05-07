"use client";
import React from "react";
import { LineType } from "@/types/types";
import useLineQuery from "@/hooks/useLineQuery";
import Loader from "./Loader";
import { handleCopy } from "@/conf/Copy";
const LineComponent = () => {
  const { getLineQuery } = useLineQuery();

  return (
    <div className="lineComponent">
      <>
        {getLineQuery.isLoading ? (
          <Loader />
        ) : (
          <>
            {getLineQuery.data
              ?.sort((a: LineType, b: LineType) => {
                return (
                  new Date(b["$createdAt"]!).getTime() -
                  new Date(a["$createdAt"]!).getTime()
                );
              })
              .map((line: LineType, index: number) => (
                <div
                  className="line"
                  key={index}
                  onClick={() => handleCopy(line.pickupLine)}
                >
                  <h4>{line.pickupLine}</h4>
                  <p>By: {line.contributor} | Click to Copy</p>
                </div>
              ))}
          </>
        )}
      </>
    </div>
  );
};
export default LineComponent;
