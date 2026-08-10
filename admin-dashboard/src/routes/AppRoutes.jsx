import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddEmployee from "../pages/addEmployee/AddEmployee";
import Employees from "../pages/employees/Employees";
import Layout from "../modules/ui/layout/Layout";
import EmployeeDetails from "../pages/employeeDetails/EmployeeDetails";
import Authentication from "../pages/authentication/Authentication";
import AdminRoute from "./AdminRoute";
import ForgotPassword from "../modules/auth/ForgotPassword";
import ResetPassword from "../modules/auth/ResetPassword";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          element={
            <AdminRoute>
              <Layout />
            </AdminRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-employee/edit/:guardId" element={<AddEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:guardId" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
