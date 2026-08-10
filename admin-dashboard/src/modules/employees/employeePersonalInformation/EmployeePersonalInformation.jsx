import InputField from "../../ui/inputField/InputField";
import DropDown from "../../ui/DropDown/DropDown";

const EmployeePersonalInformation = ({ employee, setEmployee }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <InputField
          label="NAME"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <InputField
          label="DATE OF BIRTH"
          type="date"
          name="dob"
          value={employee.dob}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
        />

        <InputField
          label="AGE"
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
        />

        <InputField
          label="ADDRESS"
          name="address"
          value={employee.address}
          onChange={handleChange}
        />

        <InputField
          label="PRIMARY CONTACT No."
          name="mobile1"
          value={employee.mobile1}
          onChange={handleChange}
          maxLength={10}
        />

        <InputField
          label="SECONDARY CONTACT No."
          name="mobile2"
          value={employee.mobile2}
          onChange={handleChange}
          maxLength={10}
        />

        <DropDown
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
      </div>
    </div>
  );
};

export default EmployeePersonalInformation;
