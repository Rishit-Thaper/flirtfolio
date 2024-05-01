import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LineType } from "@/types/types";
import { createLine, getLine } from "@/services/lineServices";
const useLineMutations = () => {
  const queryClient = useQueryClient();

  const getLineQuery = useQuery({
    queryKey: ["lines"],
    queryFn: () => getLine()
  });
  const createLineMutation = useMutation({
    mutationFn: (data: LineType) => createLine(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lines"] });
    },
  });
  return { getLineQuery, createLineMutation };
};

export default useLineMutations;
