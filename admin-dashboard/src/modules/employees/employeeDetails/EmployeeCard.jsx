import EmployeeRow from "./EmployeeRow";
import EmployeeSection from "./EmployeeSection";
import EditButton from "../../ui/button/EditButton";
import DeleteButton from "../../ui/button/DeleteButton";
import { useDeleteEmployee } from "../../../hooks/useDeleteEmployee";
import { useNavigate } from "react-router-dom";
const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate();

  const { mutate } = useDeleteEmployee();

  const handleEdit = (guardId) => {
    navigate(`/add-employee/edit/${guardId}`);
  };

  const handleDelete = (guardId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      mutate(guardId);
      navigate("/employees");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid grid-cols-3 items-center mb-8">
        <div></div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Employee Details
        </h1>

        <div className="flex justify-end gap-3 mb-8">
          <EditButton onClick={() => handleEdit(employee.guardId)} />
          <DeleteButton onClick={() => handleDelete(employee.guardId)} />
        </div>
      </div>
      <EmployeeSection title="Personal Information">
        <EmployeeRow label="Guard ID" value={employee.guardId} />

        <EmployeeRow label="Name" value={employee.name} />

        <EmployeeRow label="Age" value={employee.age} />

        <EmployeeRow label="Address" value={employee.address} />

        <EmployeeRow label="Mobile 1" value={employee.mobile1} />

        <EmployeeRow label="Mobile 2" value={employee.mobile2} />
      </EmployeeSection>

      <EmployeeSection title="Employment Information">
        <EmployeeRow label="Qualification" value={employee.qualification} />

        <EmployeeRow label="Shift Type" value={employee.shiftType} />

        <EmployeeRow
          label="Assigned Location"
          value={employee.assignedLocation}
        />

        <EmployeeRow label="Experience" value={`${employee.experience}`} />

        <EmployeeRow label="Status" value={employee.status} />
      </EmployeeSection>
    </div>
  );
};

export default EmployeeCard;
