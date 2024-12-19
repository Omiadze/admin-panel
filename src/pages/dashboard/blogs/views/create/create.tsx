import React from "react";

// import { UploadOutlined } from "@ant-design/icons";
import { createBlogs } from "../../../../../api/blogs";
import { useMutation } from "@tanstack/react-query";
import BlogsCreateForm from "../../components/form/create";
import { BlogCreateTypes } from "../../../../../api/blogs";

const BlogsCreate: React.FC = () => {
  //   const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["blogsCreate"],
    mutationFn: createBlogs,
    onSuccess: (data) => {
      console.log("Question posted successfully:", data);
    },
    onError: (error) => {
      console.error("Failed to create question:", error);
    },
  });

  const onFinish = (values: BlogCreateTypes) => {
    mutation.mutate(values);
    console.log("values", values);
  };

  return <BlogsCreateForm onFinish={onFinish} />;
};

export default BlogsCreate;
