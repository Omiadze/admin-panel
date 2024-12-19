import { Button, Form, Input } from "antd";
import { BlogCreateTypes } from "../../../../../../api/blogs";

interface BlogsCreateFormProps {
  onFinish: (values: BlogCreateTypes) => void;
}

const BlogsCreateForm: React.FC<BlogsCreateFormProps> = ({ onFinish }) => {
  return (
    <Form
      name="blogCreate"
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Title (EN)"
        name="title_en"
        rules={[{ required: true, message: "Please input the blog title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title (KA)"
        name="title_ka"
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
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Description (KA)"
        name="description_ka"
        rules={[
          { required: true, message: "Please input the blog description!" },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogsCreateForm;
