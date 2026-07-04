import InputField from "../../ui/inputField/InputField";
import SelectField from "../../ui/DropDown/DropDown";

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
    <div className="max-w-4xl mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField
          label="Qualification"
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
          label="Shift Type"
          name="shiftType"
          value={employee.shiftType}
          onChange={handleChange}
          options={["Day Shift", "Night Shift", "Rotational Shift"]}
        />

        <InputField
          label="Location"
          name="assignedLocation"
          value={employee.assignedLocation}
          onChange={handleChange}
        />

        <InputField
          label="Experience"
          type="number"
          name="experience"
          value={employee.experience}
          onChange={handleChange}
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
