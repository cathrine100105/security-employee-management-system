const TableRow = ({ children, index, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className={`
        cursor-pointer
        transition-colors
        hover:bg-blue-50
        ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
      `}
    >
      {children}
    </tr>
  );
};

export default TableRow;
