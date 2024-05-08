"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { config } from "@/conf/config";
import { LineType } from "@/types/types";

const useLineMutations = () => {
  const queryClient = useQueryClient();
  const { apiURL } = config;

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

  const createLineMutation = useMutation({
    mutationFn: async (data: LineType) => {
      const response = await fetch("/api/lines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lines"] });
    },
  });
  return { getLineQuery, createLineMutation };
};

export default useLineMutations;
