import { login } from "../../../api/admin";
import { useMutation } from "@tanstack/react-query";

export const useLogin = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: onSuccess,
  });
};
