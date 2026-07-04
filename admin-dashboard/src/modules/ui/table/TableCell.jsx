const TableCell = ({ children }) => {
  return <td className="px-6 py-4 text-center">{children || "-"}</td>;
};

export default TableCell;
