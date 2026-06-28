import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Add Employee", path: "/add-employee" },
  { name: "Employees", path: "/employees" },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-2xl font-bold">Security System</h3>
      </div>

      <nav className="mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-3 ${
                isActive ? "bg-blue-600" : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
