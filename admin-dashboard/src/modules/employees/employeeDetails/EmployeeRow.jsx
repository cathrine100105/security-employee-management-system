const EmployeeRow = ({
    label,
    value,
}) => {

    return (

        <div>

            <p className="text-gray-500">

                {label}

            </p>

            <p className="font-semibold">

                {value?.toString().trim() ? value : "-"}

            </p>

        </div>

    );

};

export default EmployeeRow;