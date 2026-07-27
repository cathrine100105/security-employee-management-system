const EmployeeSection = ({
    title,
    children,
}) => {

    return (

        <div className="mb-8">

            <h2 className="text-xl font-semibold mb-4 border-b pb-2">

                {title}

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {children}

            </div>

        </div>

    );

};

export default EmployeeSection;