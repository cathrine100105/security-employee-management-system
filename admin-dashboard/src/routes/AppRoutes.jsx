import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddEmployee from "../pages/addEmployee/AddEmployee";
//import Employees from "../pages/employees/Employees";
import Layout from "../modules/ui/layout/Layout";
import EmployeeDetails from "../pages/employeeDetails/EmployeeDetails";
import Login from "../pages/login/Login";
import AdminRoute from "./AdminRoute";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
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
          {/* <Route path="/employees" element={<Employees />} /> */}
          <Route path="/employees/:guardId" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
