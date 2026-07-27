import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import MousePointer from "../animation/MousePointer";

const Layout = () => {
  return (
    <div>
      <Sidebar />

      <main className="relative ml-0 lg:ml-64 pt-20 lg:pt-6 p-6 min-h-screen bg-gray-100 overflow-hidden">
        <MousePointer />

        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
