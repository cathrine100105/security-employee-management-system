import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../api/securityApi";

export const useUpdateEmployee = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
  });
};
