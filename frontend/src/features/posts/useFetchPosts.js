import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useFetchPosts = (tags) => {
  if (!tags) {
    return useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        return await axiosInstance.get(`/posts/`);
      },
    });
  }

  const convertedTags = tags.toLowerCase();

  return useQuery({
    queryKey: [convertedTags, "posts"],
    queryFn: async () => {
      console.log(convertedTags);
      return await axiosInstance.get(`/posts/?tags=${convertedTags}`);
    },
  });
};

export default useFetchPosts;
