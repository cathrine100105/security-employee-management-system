const TableHeader = ({ headers }) => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            className="px-6 py-4 text-center font-semibold bg-gray-500 text-white"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
