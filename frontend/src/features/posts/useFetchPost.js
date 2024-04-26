import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useFetchPost = (postId) => {
  return useQuery({
    queryKey: [postId, "post"],
    queryFn: async () => {
      return await axiosInstance.get(`/posts/${postId}`);
    },
  });
};

export default useFetchPost;
