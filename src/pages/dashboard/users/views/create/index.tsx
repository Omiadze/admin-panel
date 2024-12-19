import React from "react";
import type { FormProps } from "antd";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../../../api/admin";
import BlogCreateForm from "../../components/form/create";

type FieldType = {
  email: string;
  password: string;
};

const UsersCreateView: React.FC = () => {
  const mutation = useMutation({
    mutationKey: ["blogsCreate"],
    mutationFn: register,
    onSuccess: (data) => {
      console.log("User created successfully:", data);
    },
    onError: (error) => {
      console.error("Failed to create user:", error);
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    mutation.mutate(values);
  };

  return <BlogCreateForm onFinish={onFinish} />;
};

export default UsersCreateView;
