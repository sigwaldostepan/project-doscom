import { axiosInstance } from "../../lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (inputs) => {
      return await axiosInstance.post("/auth/login", {
        username: inputs.username,
        password: inputs.password,
      });
    },
  });
};
