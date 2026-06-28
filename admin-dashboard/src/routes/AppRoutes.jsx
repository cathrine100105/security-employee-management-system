import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddEmployee from "../pages/addEmployee/AddEmployee";
import Employees from "../pages/employees/Employees";
import Layout from "../modules/ui/layout/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
