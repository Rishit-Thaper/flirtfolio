"use client";
import React from "react";
import { LineType } from "@/types/types";
import useLineQuery from "@/hooks/useLineQuery";
import Loader from "./Loader";
import toast from "react-hot-toast";
const LineComponent = () => {
  const { getLineQuery } = useLineQuery();
  const handleCopy = (pickupLine: string) => {
    navigator.clipboard
      .writeText(pickupLine)
      .then(() => {
        toast.success("Copy Hogya, ab bhejde 😁!");
      })
      .catch((error) => {
        console.error("Failed to copy pickup line:", error);
      });
  };

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
                  <p>By: {line.contributor}</p>
                </div>
              ))}
          </>
        )}
      </>
    </div>
  );
};
export default LineComponent;
