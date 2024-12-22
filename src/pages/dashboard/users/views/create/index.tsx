import React from "react";
import type { FormProps } from "antd";
import BlogCreateForm from "../../components/form/create";
import { useRegister } from "../../../../../react-query/mutation/dashboard/users";

type FieldType = {
  email: string;
  password: string;
};

const UsersCreateView: React.FC = () => {
  const { mutate } = useRegister();

  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    mutate(values);
  };

  return <BlogCreateForm onFinish={onFinish} />;
};

export default UsersCreateView;
