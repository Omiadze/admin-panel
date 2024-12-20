import { Route } from "react-router-dom";
import AuthGuard from "../../../components/guards/Auth";
import Login from "../../../pages/auth/login";

import { AUTH_PATHS } from "../index.enum";
import { lazy } from "react";

const AuthLayout = lazy(() => import("../../../layouts/auth"));

export const AUTH_ROUTES = [
  <Route path={AUTH_PATHS.LOGIN} element={<AuthLayout />}>
    <Route
      index
      element={
        <AuthGuard>
          <Login />
        </AuthGuard>
      }
    />
  </Route>,
];
