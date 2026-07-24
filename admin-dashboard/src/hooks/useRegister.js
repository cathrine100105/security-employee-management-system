import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/authApi";

export const useRegister = (onSuccess) => {
  return useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      alert("Registration Successful");

      if (onSuccess) {
        onSuccess(data);
      }
    },

    onError: (error) => {
      const status = error.response?.status;
      if (status === 409) {
        alert("Email already exists");
      } else if (status === 400) {
        alert("Invalid registration details");
      } else if (status === 500) {
        // Current backend returns 500 for duplicate email
        alert("Email already exists");
      } else {
        alert("Registration Failed");
      }
    },
  });
};
