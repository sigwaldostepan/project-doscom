import { axiosInstance } from "../../lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (inputs) => {
      return await axiosInstance.post("/auth/register", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
    },
  });
};
