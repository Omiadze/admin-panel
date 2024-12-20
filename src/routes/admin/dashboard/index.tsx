import { Route } from "react-router-dom";
import AdminGuard from "../../../components/guards/admin";
import AdminLayout from "../../../layouts/dashboard";
import { DASHBOARD_PATHS } from "../index.enum";
import { lazy } from "react";

const UsersPage = lazy(() => import("../../../pages/dashboard/users/users"));
const UsersCreateView = lazy(
  () => import("../../../pages/dashboard/users/views/create")
);
const UsersUpdateView = lazy(
  () => import("../../../pages/dashboard/users/views/update")
);
const Blogs = lazy(() => import("../../../pages/dashboard/blogs/blogs"));
const BlogsCreate = lazy(
  () => import("../../../pages/dashboard/blogs/views/create/create")
);
const BlogsUpdateView = lazy(
  () => import("../../../pages/dashboard/blogs/views/update")
);

export const DASHBOARD_ROUTES = [
  <Route
    path="/"
    element={
      <AdminGuard>
        <AdminLayout />
      </AdminGuard>
    }
  >
    {/* Users Routes */}
    <Route path={DASHBOARD_PATHS.USERS} element={<UsersPage />} />
    <Route path={DASHBOARD_PATHS.USERS_CREATE} element={<UsersCreateView />} />
    <Route path={DASHBOARD_PATHS.USERS_UPDATE} element={<UsersUpdateView />} />

    {/* Blogs Routes */}
    <Route path={DASHBOARD_PATHS.BLOGS} element={<Blogs />} />
    <Route path={DASHBOARD_PATHS.BLOGS_CREATE} element={<BlogsCreate />} />
    <Route path={DASHBOARD_PATHS.BLOGS_UPDATE} element={<BlogsUpdateView />} />
  </Route>,
];
