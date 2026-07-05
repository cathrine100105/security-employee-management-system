const EmployeeRow = ({ label, value }) => {
  return (
    <div>
      <p className=" font-bold text-gray-800 italic tracking-widest">{label}</p>

      <p>{value?.toString().trim() ? value : "-"}</p>
    </div>
  );
};

export default EmployeeRow;
