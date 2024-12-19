import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
