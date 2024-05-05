"use client";
import { useQuery } from "@tanstack/react-query";

const useLineQuery = () => {
  const getLineQuery = useQuery({
    queryKey: ["lines"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/lines");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
      }
    },
  });
  const getRandomQuery = useQuery({
    queryKey: ["randomLines"],
    queryFn: async () => {
      try {
        const response = await fetch("https://rizzapi.vercel.app/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.error("Error Fetching data:", error);
        throw new Error("failed to fetch");
      }
    },
  });
  return { getLineQuery, getRandomQuery };
};

export default useLineQuery;
