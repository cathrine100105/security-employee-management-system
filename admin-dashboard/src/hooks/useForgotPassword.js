import { useMutation } from "@tanstack/react-query";

import { forgotPassword } from "../services/authApi";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (data) => {
      alert(data.message || "Password reset link sent successfully.");
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
