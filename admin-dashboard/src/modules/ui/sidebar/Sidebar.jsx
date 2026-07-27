import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import LogoutButton from "../button/LogoutButton";

const navItems = [
  { name: "DASHBOARD", path: "/" },
  { name: "EMPLOYEES", path: "/employees" },
  { name: "ADD NEW EMPLOYEE", path: "/add-employee" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`
    fixed top-0 left-0
    h-dvh w-72 max-w-[85vw]
    bg-gray-600 text-white
    flex flex-col
    z-50
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:w-64 lg:max-w-none lg:translate-x-0
  `}
      >
        <div className="flex items-center justify-between border-b border-slate-500 px-6 py-5">
          <h3 className="text-2xl italic tracking-widest">GUARD TRACK</h3>

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 transition-colors ${
                  isActive ? "bg-gray-500" : "hover:bg-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex justify-center items-center p-4 border-t border-slate-500">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
