import { useParams } from "react-router-dom";
import { useEmployee } from "../../hooks/useEmployee";
import { Shield } from "lucide-react";
import EmployeeCard from "../../modules/employees/employeeDetails/EmployeeCard";
import BackButton from "../../modules/ui/button/BackButton";

const EmployeeDetails = () => {
  const { guardId } = useParams();

  const { data, isLoading } = useEmployee(guardId);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-80 gap-5">
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
      <BackButton />

      <div className="max-w-5xl mx-auto py-6">
        <EmployeeCard employee={data} />
      </div>
    </>
  );
};

export default EmployeeDetails;
