import { useEmployees } from "../../../hooks/useEmployees";
import { useDeleteEmployee } from "../../../hooks/useDeleteEmployee";
import { Shield } from "lucide-react";
import Table from "../../ui/table/Table";
import TableHeader from "../../ui/table/TableHeader";
import TableRow from "../../ui/table/TableRow";
import TableCell from "../../ui/table/TableCell";
import DeleteButton from "../../ui/button/DeleteButton";
import EditButton from "../../ui/button/EditButton";

import { useNavigate } from "react-router-dom";

const EmployeeTable = ({ searchTerm }) => {
  const { data = [], isLoading, error } = useEmployees();
  const filteredEmployees = data.filter((employee) => {
    const search = searchTerm.toLowerCase();

    return (
      employee.name?.toLowerCase().includes(search) ||
      employee.guardId?.toString().includes(search) ||
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

  const navigate = useNavigate();

  const handleEdit = (guardId) => {
    navigate(`/add-employee/edit/${guardId}`);
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
    <div className="max-w-7xl mx-auto mt-3 overflow-x-auto">
      <Table>
        <TableHeader
          headers={[
            "Guard Id",
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
            <TableRow
              key={employee.guardId}
              index={index}
              onClick={() => navigate(`/employees/${employee.guardId}`)}
            >
              <TableCell>{employee.guardId}</TableCell>
              <TableCell>{employee.name}</TableCell>

              <TableCell>{employee.qualification}</TableCell>

              <TableCell>{employee.shiftType}</TableCell>

              <TableCell>{employee.assignedLocation}</TableCell>

              <TableCell>
                {employee.experience ? `${employee.experience} Years` : "-"}
              </TableCell>

              <TableCell>
                <div
                  className="flex justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <EditButton onClick={() => handleEdit(employee.guardId)} />
                  <DeleteButton
                    onClick={() => handleDelete(employee.guardId)}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
