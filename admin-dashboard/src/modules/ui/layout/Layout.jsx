import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import MousePointer from "../animation/MousePointer";
import background from "../../../data/background";

const Layout = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % background.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${background[currentBg]})`,
        }}
      />

      <div className="fixed inset-0 bg-gray-100/50" />

      <MousePointer />

      <Sidebar />

      <main className="relative z-10 ml-0 lg:ml-64 pt-20 lg:pt-6 px-4 py-4 sm:px-6 lg:px-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
