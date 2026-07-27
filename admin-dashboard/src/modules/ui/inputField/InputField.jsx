const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  maxLength
}) => {
  return (
    <div className="text-lg flex flex-col gap-2">
      <label
        htmlFor={name}
        className="italic text-gray-700 text-lg tracking-widest"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="text-lg w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
