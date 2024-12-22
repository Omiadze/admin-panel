import React from "react";
import BlogsCreateForm from "../../components/form/create";
import { BlogCreateTypes } from "../../../../../api/blogs";
import { useCreateBlog } from "../../../../../react-query/mutation/dashboard/blogs";

const BlogsCreate: React.FC = () => {
  const { mutate } = useCreateBlog();

  const onFinish = (values: BlogCreateTypes) => {
    mutate(values);
    console.log("values", values);
  };

  return <BlogsCreateForm onFinish={onFinish} />;
};

export default BlogsCreate;
