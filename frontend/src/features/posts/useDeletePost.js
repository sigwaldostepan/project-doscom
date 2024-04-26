import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useDeletePost = () => {
  return useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.delete(`/posts/${id}`);
    },
  });
};

export default useDeletePost;
