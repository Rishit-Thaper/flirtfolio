"use client";
import React from "react";
import useLineQuery from "@/hooks/useLineQuery";

const LineComponent = () => {
  const { getRandomQuery } = useLineQuery();
  const { data } = getRandomQuery;
  return (
    <div>
      <>
        <h1>{data?.text}</h1>
      </>
    </div>
  );
};

export default LineComponent;
