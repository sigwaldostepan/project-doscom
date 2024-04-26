import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useCreatePost = () => {
  return useMutation({
    mutationFn: async ({ title, desc, tags, img, date, username }) => {
      return await axiosInstance.post("/posts", {
        title,
        desc,
        tags,
        img,
        date,
        username,
      });
    },
  });
};

export default useCreatePost;
