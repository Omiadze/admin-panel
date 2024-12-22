import { useMutation } from "@tanstack/react-query";
import { createBlogs } from "../../../../api/blogs";

export const useCreateBlog = () => {
  return useMutation({
    mutationKey: ["blogsCreate"],
    mutationFn: createBlogs,
  });
};
