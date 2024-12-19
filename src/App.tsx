import { Route, Routes } from "react-router";
import "./App.css";

import NotFoundPage from "./pages/not-found/not-fount-page";
import AdminLayout from "./layouts/dashboard";
import UsersPage from "./pages/dashboard/users/users";
import Blogs from "./pages/dashboard/blogs/blogs";
import AuthLayout from "./layouts/auth";
import Login from "./pages/auth/login";
import UsersUpdateView from "./pages/dashboard/users/views/update";
import UsersCreateView from "./pages/dashboard/users/views/create";
import BlogsUpdateView from "./pages/dashboard/blogs/views/update";
import BlogsCreate from "./pages/dashboard/blogs/views/create/create";
import { useEffect } from "react";
import { supabase } from "./supabase";
import { useAuthContext } from "./context/use-auth-context";

import AuthGuard from "./components/guards/Auth";
import AdminGuard from "./components/guards/admin";

function App() {
  const { handleSetUser } = useAuthContext();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      {/* Authentication Layout */}

      <Route path="/login" element={<AuthLayout />}>
        <Route
          index
          element={
            <AuthGuard>
              <Login />
            </AuthGuard>
          }
        />
      </Route>

      {/* Dashboard Layout */}

      <Route
        path="/"
        element={
          <AdminGuard>
            <AdminLayout />
          </AdminGuard>
        }
      >
        {/* Users Routes */}
        <Route path="users" element={<UsersPage />} />
        <Route path="users/create" element={<UsersCreateView />} />
        <Route path="users/update/:id" element={<UsersUpdateView />} />

        {/* Blogs Routes */}
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/create" element={<BlogsCreate />} />
        <Route path="blogs/update/:id" element={<BlogsUpdateView />} />
      </Route>

      {/* Catch-All Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
