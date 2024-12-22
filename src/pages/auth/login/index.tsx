import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { useNavigate } from "react-router";
import { useLogin } from "../../../react-query/mutation/auth";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const navigate = useNavigate();
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const handleSuccess = () => {
    navigate("/");
  };

  const { mutate } = useLogin(handleSuccess);
  // const mutation = useMutation({
  //   mutationKey: ["login"],
  //   mutationFn: login,
  //   onSuccess: (data) => {
  //     console.log("User signed in:", data);
  //     navigate("/");
  //   },
  // });
  const onFinish = (values: { email: string; password: string }) => {
    console.log("Finish:", values);
    mutate(values);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Login;
