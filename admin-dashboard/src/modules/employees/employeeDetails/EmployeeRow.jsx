const EmployeeRow = ({ label, value }) => {
  return (
    <div>
      <p className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 font-bold text-gray-800 italic tracking-widest">{label}</p>

      <p>{value?.toString().trim() ? value : "-"}</p>
    </div>
  );
};

export default EmployeeRow;
