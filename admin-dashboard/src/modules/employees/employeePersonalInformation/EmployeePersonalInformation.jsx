import InputField from "../../ui/inputField/InputField";

const EmployeePersonalInformation = ({ employee, setEmployee }) => {
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          label="Name"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <InputField
          label="Address"
          name="address"
          value={employee.address}
          onChange={handleChange}
        />

        <InputField
          label="Date Of Birth"
          type="date"
          name="dob"
          value={employee.dob}
          onChange={handleChange}
        />

        <InputField
          label="Age"
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
        />

        <InputField
          label="Mobile Number 1"
          name="mobile1"
          value={employee.mobile1}
          onChange={handleChange}
        />

        <InputField
          label="Mobile Number 2"
          name="mobile2"
          value={employee.mobile2}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EmployeePersonalInformation;
