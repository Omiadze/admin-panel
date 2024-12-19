import { Button, Input } from "antd";
import Form from "antd/es/form";

type FieldType = {
  email: string;
  password: string;
};
interface UsersCreateFormProps {
  onFinish: (values: FieldType) => void;
}
const BlogCreateForm: React.FC<UsersCreateFormProps> = ({ onFinish }) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          {"Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogCreateForm;
