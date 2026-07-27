import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "../services/authApi";

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: googleLogin,
  });
};