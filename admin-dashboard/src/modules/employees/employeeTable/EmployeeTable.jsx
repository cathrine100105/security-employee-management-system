import { useEmployees } from "../../../hooks/useEmployees";
import { useDeleteEmployee } from "../../../hooks/useDeleteEmployee";
import { Shield } from "lucide-react";
import Table from "../../ui/table/Table";
import TableHeader from "../../ui/table/TableHeader";
import TableRow from "../../ui/table/TableRow";
import TableCell from "../../ui/table/TableCell";
import TableButton from "../../ui/table/TableButton";

const EmployeeTable = ({ searchTerm }) => {
  const { data = [], isLoading, error } = useEmployees();
  const filteredEmployees = data.filter((employee) => {
    const search = searchTerm.toLowerCase();

    return (
      employee.name?.toLowerCase().includes(search) ||
      employee.guardId?.toString().includes(search) ||
      employee.mobile1?.includes(search) ||
      employee.mobile2?.includes(search) ||
      employee.qualification?.toLowerCase().includes(search) ||
      employee.shiftType?.toLowerCase().includes(search) ||
      employee.assignedLocation?.toLowerCase().includes(search) ||
      employee.status?.toLowerCase().includes(search)
    );
  });
  const { mutate } = useDeleteEmployee();

  const handleDelete = (guardId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      mutate(guardId);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-80 gap-5">
        <Shield className="w-16 h-16 text-blue-600 animate-pulse" />

        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Loading Security System
          </h2>

          <p className="text-gray-500">Retrieving employee records...</p>
        </div>
      </div>
    );
  }

  if (error) return <p>Failed to load employees.</p>;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Employee Dashboard</h2>

        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Total Employees : {filteredEmployees.length}
        </span>
      </div>

      <Table>
        <TableHeader
          headers={[
            "Quard Id",
            "Name",
            "Qualification",
            "Shift",
            "Location",
            "Experience",
            "Action",
          ]}
        />

        <tbody>
          {filteredEmployees.map((employee, index) => (
            <TableRow key={employee.guardId} index={index}>
              <TableCell>{employee.guardId}</TableCell>
              <TableCell>{employee.name}</TableCell>

              <TableCell>{employee.qualification}</TableCell>

              <TableCell>{employee.shiftType}</TableCell>

              <TableCell>{employee.assignedLocation}</TableCell>

              <TableCell>{employee.experience}</TableCell>

              <TableCell>
                <TableButton onClick={() => handleDelete(employee.guardId)} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
