import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useFetchPosts = (tags) => {
  return useQuery({
    queryKey: [tags, "posts"],
    queryFn: async () => {
      return await axiosInstance.get(`/posts/${tags}`);
    },
  });
};

export default useFetchPosts;
