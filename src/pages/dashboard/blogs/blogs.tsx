import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { blogs, getBlogs } from "../../../api/blogs";
import { setTimeConvertion } from "../users/time-convertion";
import Loading from "../../../components/loading";

const { Column } = Table;

const Blogs = () => {
  const { data, isLoading, isError } = useQuery<blogs[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const navigate = useNavigate();

  const handleEditBlog = (id: number) => {
    navigate(`/blogs/update/${id}`);
  };
  const handleCreateBlog = () => {
    navigate(`/blogs/create`);
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading blogs.</div>;

  const dataSource = data?.map((blog) => ({
    key: blog.id,
    id: blog.id,
    title_en: blog.title_en,
    description_en: blog.description_en,
    createdAt: setTimeConvertion(blog.created_at),
    imageUrl: blog.image_url,
  }));

  return (
    <>
      <Button className="mb-5" onClick={handleCreateBlog} type="dashed">
        {" "}
        <PlusOutlined />
        Add Blog
      </Button>
      <Table bordered dataSource={dataSource}>
        <Column title="Title (EN)" dataIndex="title_en" />
        <Column title="Description (EN)" dataIndex="description_en" />
        <Column title="Created At" dataIndex="createdAt" />
        <Column
          title="Actions"
          render={(_, row) => (
            <EditOutlined
              className="hover:cursor-pointer text-amber-500"
              onClick={() => handleEditBlog(row.id)}
            />
          )}
        />
      </Table>
    </>
  );
};

export default Blogs;
