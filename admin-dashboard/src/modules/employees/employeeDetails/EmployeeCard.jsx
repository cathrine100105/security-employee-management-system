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
      navigate("/");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:items-center mb-6 md:mb-8">
        <div className="hidden md:block"></div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center tracking-wider">
          EMPLOYEE DETAILS
        </h1>

        <div className="flex justify-center md:justify-end gap-3">
          <EditButton onClick={() => handleEdit(employee.guardId)} />
          <DeleteButton onClick={() => handleDelete(employee.guardId)} />
        </div>
      </div>
      <EmployeeSection title="Personal Information">
        <EmployeeRow label="NAME" value={employee.name} />

        <EmployeeRow label="DATE OF BIRTH" value={employee.dob} />

        <EmployeeRow label="AGE" value={employee.age} />

        <EmployeeRow label="ADDRESS" value={employee.address} />

        <EmployeeRow label="PRIMARY CONTACT No." value={employee.mobile1} />

        <EmployeeRow label="SECONDARY CONTACT No." value={employee.mobile2} />
      </EmployeeSection>

      <EmployeeSection title="Employment Information">
        <EmployeeRow label="GUARD ID" value={employee.guardId} />
        <EmployeeRow label="QUALIFICATION" value={employee.qualification} />

        <EmployeeRow label="SHIFT TYPE" value={employee.shiftType} />

        <EmployeeRow label="Location" value={employee.assignedLocation} />

        <EmployeeRow label="EXPERIENCE" value={`${employee.experience}`} />

        <EmployeeRow label="STATUS" value={employee.status} />
      </EmployeeSection>
    </div>
  );
};

export default EmployeeCard;
