import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/authApi";

export const useLogin = (onSuccess) => {
  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      console.log("Login Success", data);

      // Store JWT Token
      localStorage.setItem("token", data.token);

      // Store User Details
      localStorage.setItem("user", JSON.stringify(data));

      if (onSuccess) {
        onSuccess(data);
      }
    },

    onError: (error) => {
      console.log("Login Error", error);

      const message =
        error.response?.data?.message || "Invalid Email or Password";

      alert(message);
    },
  });
};