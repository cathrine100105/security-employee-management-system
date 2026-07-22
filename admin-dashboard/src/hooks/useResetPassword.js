import { useMutation } from "@tanstack/react-query";

import { resetPassword } from "../services/authApi";

export const useResetPassword = (onSuccess) => {
  return useMutation({
    mutationFn: resetPassword,

    onSuccess: (data) => {
      alert(data.message || "Password updated successfully.");

      if (onSuccess) {
        onSuccess();
      }
    },

    onError: (error) => {
      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong.",
      );
    },
  });
};
