import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-600 text-white flex items-center px-4 shadow z-50 lg:hidden">
        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>

        <h2 className="ml-4 text-2xl italic tracking-widest">GUARD TRACK</h2>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0
          h-dvh w-72 max-w-[85vw]
          bg-gray-600 text-white
          flex flex-col
          shadow-xl
          z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:w-64 lg:max-w-none
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
                `block px-6 py-3 transition-all duration-200 ${
                  isActive ? "bg-gray-500" : "hover:bg-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-500 flex justify-center">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
