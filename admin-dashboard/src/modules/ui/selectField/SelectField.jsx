const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-700">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          border
          border-gray-300
          rounded-lg
          px-4
          py-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      >
        <option value="">Select</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
