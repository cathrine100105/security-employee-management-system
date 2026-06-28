import { useState } from "react";
import InputField from "../../ui/inputField/InputField";

const EmployeeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Search Employees</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <InputField
          placeholder="Search by Name, Guard ID, Mobile, Location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EmployeeSearch;
