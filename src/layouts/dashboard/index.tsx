import { useMutation } from "@tanstack/react-query";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../api/admin";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `Dashboard`,
    label: `Dashboard`,

    children: [
      {
        key: 0,
        label: <Link to="/users">Users</Link>,
      },
      {
        key: 1,
        label: <Link to="/blogs">Blogs</Link>,
      },
    ],
  },
];

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["login"],
    mutationFn: logout,
  });

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <div>
          <Button
            onClick={() => {
              handleLogout();
            }}
          >
            Log Out
          </Button>
        </div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
