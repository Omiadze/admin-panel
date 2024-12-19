import { useAuthContext } from "../../../context/use-auth-context";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children || <Outlet />;
};

export default AdminGuard;
