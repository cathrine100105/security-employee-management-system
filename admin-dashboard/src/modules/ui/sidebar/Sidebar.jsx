import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoutButton from "../button/LogoutButton";

const navItems = [
  { name: "DASHBOARD", path: "/" },
  { name: "ADD NEW EMPLOYEE", path: "/add-employee" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-600 text-white flex items-center px-4 z-50 shadow">
        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>

        <h2 className="ml-4 text-2xl italic tracking-widest">
          GUARD TRACK
        </h2>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-600 text-white
          flex flex-col z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <h3 className="text-2xl italic tracking-widest">
            GUARD TRACK
          </h3>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
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

        <LogoutButton />
      </div>
    </>
  );
};

export default Sidebar;