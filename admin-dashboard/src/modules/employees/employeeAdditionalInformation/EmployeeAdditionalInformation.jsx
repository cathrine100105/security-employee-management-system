import InputField from "../../ui/inputField/InputField";
import SelectField from "../../ui/selectField/SelectField";

import { useCreateEmployee } from "../../../hooks/useCreateEmployee";

const EmployeeAdditionalInformation = ({ employee, setEmployee }) => {
  const { mutate } = useCreateEmployee();

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    mutate(employee);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 pb-6">
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

      <div className="flex justify-center mt-5">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white p-3 rounded-lg"
        >
          Save Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeAdditionalInformation;
