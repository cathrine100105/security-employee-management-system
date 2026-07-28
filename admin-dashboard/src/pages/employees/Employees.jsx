import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployee } from "../../hooks/useEmployee";
import { Shield } from "lucide-react";
import SearchBar from "../../modules/ui/searchbar/Searchbar";
import EmployeeTable from "../../modules/employees/employeeTable/EmployeeTable";
import ZoomIn from "../../modules/ui/animation/ZoomIn";
const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { guardId } = useParams();
  const { data, isLoading } = useEmployee(guardId);
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <Shield className="w-16 h-16 text-blue-600 animate-pulse" />

          <div className="text-center">
            <h2 className="text-xl font-bold text-black">
              Loading Security System
            </h2>

            <p className="text-black">Retrieving employee records...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ZoomIn>
      <div className="mt-5 mb-3">
        <h2 className="text-xl md:text-2xl font-semibold">EMPLOYEE DETAILS</h2>
      </div>
      <div className="mt-16 lg:mt-0">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="flex justify-between items-center mt-3">
        <EmployeeTable searchTerm={searchTerm} employee={data} />
      </div>
    </ZoomIn>
  );
};

export default Employees;
