import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { updateUserInAdmin } from "../../../../../../api/admin";
import { useParams } from "react-router-dom"; // Ensure this import is from "react-router-dom"

type FieldType = {
  email?: string;
  phone?: string;
};

const FormPage: React.FC<{
  initialValues: { email: string; phone: string };
}> = ({ initialValues }) => {
  // Extract the parameter (e.g., userId) from the URL
  const { id } = useParams<{ id: string }>();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      console.log("Success:", values);
      if (!id) {
        console.error("No userId provided in the URL");
        return;
      }
      // Ensure email and phone are not undefined
      if (!values.email || !values.phone) {
        console.error("Invalid form data");
        return;
      }

      await updateUserInAdmin(id, {
        email: values.email,
        phone: values.phone,
      });
      console.log("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: "Please input your number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPage;
