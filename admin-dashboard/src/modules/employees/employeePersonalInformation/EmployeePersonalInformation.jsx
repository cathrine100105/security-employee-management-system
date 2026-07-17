import InputField from "../../ui/inputField/InputField";

const EmployeePersonalInformation = ({ employee, setEmployee }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <InputField
            label="NAME"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <InputField
            label="DATE OF BIRTH"
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <InputField
            label="AGE"
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <InputField
            label="ADDRESS"
            name="address"
            value={employee.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <InputField
            label="PRIMARY CONTACT No."
            name="mobile1"
            value={employee.mobile1}
            onChange={handleChange}
            maxLength={10}
          />
        </div>

        <div>
          <InputField
            label="SECONDARY CONTACT No."
            name="mobile2"
            value={employee.mobile2}
            onChange={handleChange}
            maxLength={10}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeePersonalInformation;
