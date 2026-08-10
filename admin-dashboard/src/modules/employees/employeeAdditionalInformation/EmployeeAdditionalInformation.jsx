import InputField from "../../ui/inputField/InputField";
import DropDown from "../../ui/DropDown/DropDown";

import { useCreateEmployee } from "../../../hooks/useCreateEmployee";
import { useUpdateEmployee } from "../../../hooks/useUpdateEmployee";
import { useNavigate } from "react-router-dom";

const EmployeeAdditionalInformation = ({ employee, setEmployee, guardId }) => {
  const navigate = useNavigate();
  const { mutate: createEmployee } = useCreateEmployee(() => {
    alert("Employee Added Successfully");
    navigate("/");
  });

  const { mutate: updateEmployee } = useUpdateEmployee(() => {
    alert("Employee Updated Successfully");
    navigate("/");
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    

    const mobileRegex = /^\d{10}$/;

  if (!mobileRegex.test(employee.mobile1)) {
    alert("Primary Contact Number must be exactly 10 digits.");
    return;
  }

  if (employee.mobile2 && !mobileRegex.test(employee.mobile2)) {
    alert("Secondary Contact Number must be exactly 10 digits.");
    return;
  }

  if (new Date(employee.dob) > new Date()) {
    alert("Date of Birth cannot be a future date.");
    return;
  }

    if (new Date(employee.joinedDate) > new Date()) {
      alert("Joined Date cannot be a future date.");
      return;
    }

    if (guardId) {
      updateEmployee({
        guardId,

        employee,
      });
    } else {
      createEmployee(employee);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 font-bold">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <InputField
          label="JOINED DATE"
          name="joinedDate"
          type="date"
          value={employee.joinedDate}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
        />

        <InputField
          label="ASSIGNED LOCATION"
          name="assignedLocation"
          value={employee.assignedLocation}
          onChange={handleChange}
        />

        <InputField
          label="EXPERIENCE"
          type="number"
          name="experience"
          value={employee.experience}
          onChange={handleChange}
        />

        <DropDown
          label="SHIFT TYPE"
          name="shiftType"
          value={employee.shiftType}
          onChange={handleChange}
          options={["Day Shift", "Night Shift", "Rotational Shift"]}
        />

        <DropDown
          label="STATUS"
          name="status"
          value={employee.status}
          onChange={handleChange}
          options={["Active", "Inactive"]}
        />
      </div>

      <div className="flex justify-center mt-7">
        <button
          onClick={handleSave}
          className="bg-blue-400 text-white p-3 rounded-lg"
        >
          {guardId ? "Update Employee" : "Save Employee"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeAdditionalInformation;
