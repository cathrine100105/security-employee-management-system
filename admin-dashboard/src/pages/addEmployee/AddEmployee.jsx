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
      <div className="relative flex items-center justify-center mb-4 md:mb-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <BackButton />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-center">
          {guardId ? "UPDATE EMPLOYEE" : "ADD EMPLOYEE"}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto mt-4 md:mt-6 bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200">
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
