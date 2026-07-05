import { NavLink } from "react-router-dom";

const navItems = [
  { name: "DASHBOARD", path: "/" },
  // { name: "Employees", path: "/employees" },
  { name: "ADD NEW EMPLOYEE", path: "/add-employee" },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-600 text-white">
      <div className="p-6 border-b border-slate-700 justify-center items-center">
        <h3 className="text-2xl italic tracking-widest">GUARD TRACK</h3>
      </div>

      <nav className="mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-6 py-3 ${
                isActive ? "bg-gray-500" : "hover:bg-gray-700"
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
