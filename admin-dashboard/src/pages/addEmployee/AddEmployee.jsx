import { useState, useEffect } from "react";
import EmployeePersonalInformation from "../../modules/employees/employeePersonalInformation/EmployeePersonalInformation";
import EmployeeAdditionalInformation from "../../modules/employees/employeeAdditionalInformation/EmployeeAdditionalInformation";
import { useEmployee } from "../../hooks/useEmployee";
import { useParams } from "react-router-dom";
import BackButton from "../../modules/ui/button/BackButton";
const AddEmployee = () => {
  const { guardId } = useParams();

  const { data } = useEmployee(guardId);

  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    dob: "",
    age: "",
    mobile1: "",
    mobile2: "",
    qualification: "",
    shiftType: "",
    assignedLocation: "",
    experience: "",
  });

  useEffect(() => {
    if (data) {
      setEmployee(data);
    }
  }, [data]);
  return (
    <>
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute left-0">
          <BackButton />
        </div>

        <h1 className="text-3xl font-bold">
          {guardId ? "Update Security Employee" : "Add Security Employee"}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-6 bg-white shadow-md rounded-xl p-8 border border-gray-200">
        <EmployeePersonalInformation
          employee={employee}
          setEmployee={setEmployee}
        />

        <EmployeeAdditionalInformation
          employee={employee}
          setEmployee={setEmployee}
          guardId={guardId}
        />
      </div>
    </>
  );
};

export default AddEmployee;
