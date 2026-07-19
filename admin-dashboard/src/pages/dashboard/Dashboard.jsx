import { useEmployees } from "../../hooks/useEmployees";
import { useParams } from "react-router-dom";
import { Shield } from "lucide-react";
import { useState } from "react";

import SearchBar from "../../modules/ui/searchbar/Searchbar";
import EmployeeTable from "../../modules/employees/employeeTable/EmployeeTable";

const Dashboard = () => {
  const { guardId } = useParams();
  const { data: employees = [], isLoading } = useEmployees(guardId);
  const dayShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Day Shift",
  );

  const nightShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Night Shift",
  );

  const rotationalShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Rotational Shift",
  );

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-60 md:h-80 gap-4 md:gap-5 px-4">
        <Shield className="w-16 h-16 text-blue-600 animate-pulse" />

        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Loading Security System
          </h2>

          <p className="text-gray-500">Retrieving employee records...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
          <h3 className="text-white text-2xl my-2 p-2">Total Employees</h3>

          <p className="text-3xl text-white mb-4">
            {isLoading ? "..." : employees?.length || 0}
          </p>
        </div>
        <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
          <h2 className="text-white text-2xl my-2 p-2">Day Shift Employees</h2>
          <p className="text-3xl text-white">{dayShiftEmployees.length}</p>
        </div>

        <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
          <h2 className="text-white text-2xl my-2 p-2">
            Night Shift Employees
          </h2>
          <p className="text-3xl text-white mb-4">
            {nightShiftEmployees.length}
          </p>
        </div>

        <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
          <h2 className="text-white text-2xl my-2 p-1">
            Rotational Shift Employees
          </h2>
          <p className="text-3xl text-white mb-4">
            {rotationalShiftEmployees.length}
          </p>
        </div>
      </div>
      <div className="mt-5 mb-3">
        <h2 className="text-2xl">EMPLOYEE DASHBOARD</h2>
      </div>
      <div className="flex justify-between items-center">
        <EmployeeTable searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Dashboard;
