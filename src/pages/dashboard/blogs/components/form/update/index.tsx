import React from "react";
import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { updateBlogInAdmin } from "../../../../../../api/blogs";
import { useParams } from "react-router-dom";

const { TextArea } = Input;

type BlogFormFields = {
  title_en?: string;
  description_en?: string;
};

const BlogFormPage: React.FC<{
  initialValues: {
    title_en: string;
    description_en: string;
  };
}> = ({ initialValues }) => {
  const { id } = useParams<{ id: string }>();

  const onFinish: FormProps<BlogFormFields>["onFinish"] = async (values) => {
    try {
      console.log("Success:", values);
      if (!id) {
        console.error("No blogId provided in the URL");
        return;
      }

      if (!values.title_en || !values.description_en) {
        console.error("Invalid form data");
        return;
      }

      await updateBlogInAdmin(id, {
        title_en: values.title_en,
        description_en: values.description_en,
      });
      console.log("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const onFinishFailed: FormProps<BlogFormFields>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="blogUpdate"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title (EN)"
        name="title_en"
        rules={[{ required: true, message: "Please input the blog title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description (EN)"
        name="description_en"
        rules={[
          { required: true, message: "Please input the blog description!" },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* Read-only field for created_at */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogFormPage;
