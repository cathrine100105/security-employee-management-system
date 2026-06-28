import { useState } from "react";
import EmployeePersonalInformation from "../../modules/employees/employeePersonalInformation/EmployeePersonalInformation";
import EmployeeAdditionalInformation from "../../modules/employees/employeeAdditionalInformation/EmployeeAdditionalInformation";

const AddEmployee = () => {
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
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Add Security Employee</h1>
      <EmployeePersonalInformation
        employee={employee}
        setEmployee={setEmployee}
      />

      <EmployeeAdditionalInformation
        employee={employee}
        setEmployee={setEmployee}
      />
    </>
  );
};

export default AddEmployee;
