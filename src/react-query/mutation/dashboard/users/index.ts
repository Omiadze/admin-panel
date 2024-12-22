import { useMutation } from "@tanstack/react-query";
import { register } from "../../../../api/admin";

export const useRegister = () => {
  return useMutation({ mutationKey: ["blogs-create"], mutationFn: register });
};
