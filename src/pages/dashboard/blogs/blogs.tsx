import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading";
import { useGetBlogs } from "../../../react-query/query/dashboard/blogs";
import { mapBlogsListForAdmin } from "../utils";

const { Column } = Table;

const Blogs = () => {
  const { data, isLoading, isError } = useGetBlogs({
    queryOptions: { select: mapBlogsListForAdmin },
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
  console.log(data ?? data);

  return (
    <>
      <Button className="mb-5" onClick={handleCreateBlog} type="dashed">
        {" "}
        <PlusOutlined />
        Add Blog
      </Button>
      <Table bordered dataSource={data}>
        <Column title="Title (EN)" dataIndex="title_en" />
        <Column title="Description (EN)" dataIndex="description_en" />
        <Column
          className="text-black"
          title="Created At"
          dataIndex="createdAt"
        />
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
