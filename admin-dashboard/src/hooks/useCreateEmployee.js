import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee } from "../api/securityApi";

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,

    onSuccess: () => {
      alert("Employee Added Successfully");

      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });
};
