import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axiosInstance";

const useEditPost = (id) => {
  return useMutation({
    mutationFn: async ({ title, desc, tags, img, date, username }) => {
      console.log(title);
      return await axiosInstance.put(`/posts/${id}`, {
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

export default useEditPost;
