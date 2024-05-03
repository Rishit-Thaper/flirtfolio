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
      const response = await fetch(`${apiURL}/api/lines`);
      const data = await response.json();
      console.log("Data", data);
      return data;
    },
  });

  const createLineMutation = useMutation({
    mutationFn: async (data: LineType) => {
      const response = await fetch(`${apiURL}/api/lines`, {
        method: "POST",
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
