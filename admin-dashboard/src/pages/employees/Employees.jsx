import { useState } from "react";
import SearchBar from "../../modules/ui/searchbar/Searchbar";
import EmployeeTable from "../../modules/employees/employeeTable/EmployeeTable";
import ZoomIn from "../../modules/ui/animation/ZoomIn";
const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <ZoomIn>
      <div className="mt-5 mb-3">
        <h2 className="text-xl md:text-2xl font-semibold">EMPLOYEE DETAILS</h2>
      </div>
      <div className="mt-16 lg:mt-0">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="flex justify-between items-center mt-3">
        <EmployeeTable searchTerm={searchTerm} />
      </div>
    </ZoomIn>
  );
};

export default Employees;
