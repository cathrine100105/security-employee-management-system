const TableRow = ({ children, index }) => {
  return (
    <tr
      className={`transition duration-200 hover:bg-blue-50 ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
