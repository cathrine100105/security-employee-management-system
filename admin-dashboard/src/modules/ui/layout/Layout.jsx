import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />

      <main className="ml-0 lg:ml-64 p-6 min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
