import InputField from "../../ui/inputField/InputField";
import SelectField from "../../ui/DropDown/DropDown";

import { useCreateEmployee } from "../../../hooks/useCreateEmployee";
import { useUpdateEmployee } from "../../../hooks/useUpdateEmployee";
import SaveButton from "../../ui/button/SaveButton";
import { useNavigate } from "react-router-dom";

const EmployeeAdditionalInformation = ({ employee, setEmployee, guardId }) => {
  const navigate = useNavigate();
  const { mutate: createEmployee } = useCreateEmployee(() => {
    alert("Employee Added Successfully");
    navigate("/employees");
  });

  const { mutate: updateEmployee } = useUpdateEmployee(() => {
    alert("Employee Updated Successfully");
    navigate("/employees");
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
    <div className="w-full max-w-4xl mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <InputField
          label="LOCATION"
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
        <SelectField
          label="QUALIFICATION"
          name="qualification"
          value={employee.qualification}
          onChange={handleChange}
          options={[
            "SSLC",
            "HSLC",
            "Diploma",
            "Under Graduate",
            "Post Graduate",
          ]}
        />

        <SelectField
          label="SHIFT TYPE"
          name="shiftType"
          value={employee.shiftType}
          onChange={handleChange}
          options={["Day Shift", "Night Shift", "Rotational Shift"]}
        />

        <SelectField
          label="STATUS"
          name="status"
          value={employee.status}
          onChange={handleChange}
          options={["Active", "InActive"]}
        />
      </div>

      <div className="flex justify-center mt-6 md:mt-7">
        <SaveButton onClick={handleSave}>
          {guardId ? "Update Employee" : "Save Employee"}
        </SaveButton>
      </div>
    </div>
  );
};

export default EmployeeAdditionalInformation;
