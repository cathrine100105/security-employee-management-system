import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee } from "../api/securityApi";

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,

    onSuccess: () => {
      alert("Employee Deleted Successfully");

      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },

    onError: () => {
      alert("Failed to Delete Employee");
    },
  });
};
