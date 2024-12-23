import { Button, Table } from "antd";
import { mapUsersListForAdmin } from "../utils";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading";
import { useGetUsersListInAdminv } from "../../../react-query/query/dashboard/users";

const { Column } = Table;

const UsersPage = () => {
  const { data, isLoading, isError } = useGetUsersListInAdminv({
    queryOptions: { select: mapUsersListForAdmin },
  });
  // const mappedUsers = data ? mapUsersListForAdmin(data) : [];
  const navigate = useNavigate();
  const handleUpdate = (id: string | number) => {
    navigate(`/users/update/${id}`);
  };
  const handleCreateUsers = () => {
    navigate("/users/create");
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading data.</div>;
  return (
    <>
      <Button className="mb-5" onClick={handleCreateUsers} type="dashed">
        {" "}
        <PlusOutlined />
        Add Users
      </Button>
      <Table bordered dataSource={data}>
        <Column title="Email" dataIndex="email" />
        <Column title="Created At" dataIndex="createdAt" />
        <Column title="Phone" dataIndex="phone" />
        <Column title="Last Sign In" dataIndex="lastSignIn" />
        <Column
          title="Actions"
          render={(_, row) => {
            return (
              <EditOutlined
                className="hover:cursor-pointer text-amber-500"
                onClick={() => {
                  handleUpdate(row.id);
                }}
              />
            );
          }}
        />
      </Table>
    </>
  );
};

export default UsersPage;
