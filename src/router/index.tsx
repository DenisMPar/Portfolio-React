import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export { AppRoutes };
