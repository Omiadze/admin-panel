import { Route, Routes } from "react-router-dom";
import { ADMIN_ROUTES } from "./admin";
import NotFoundPage from "../pages/not-found/not-fount-page";

function AppRoutes() {
  return (
    <Routes>
      {/* Authentication Layout */}

      {ADMIN_ROUTES}

      {/* Dashboard Layout */}

      {/* Catch-All Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
