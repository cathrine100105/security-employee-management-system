import { useEmployees } from "../../hooks/useEmployees";
import { useParams } from "react-router-dom";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import securityTips from "../../data/securityTips";
import ZoomIn from "../../modules/ui/animation/ZoomIn";
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const { guardId } = useParams();
  const { data: employees = [], isLoading } = useEmployees(guardId);
  const dayShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Day Shift",
  );

  const nightShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Night Shift",
  );

  const rotationalShiftEmployees = employees.filter(
    (employee) => employee.shiftType === "Rotational Shift",
  );
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % securityTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <Shield className="w-16 h-16 text-blue-600 animate-pulse" />

          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Loading Security System
            </h2>

            <p className="text-gray-500">Retrieving employee records...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ZoomIn delay={0.1}>
        <div className="pt-15 lg:pt-0">
          {user?.email && (
            <div className="flex items-center gap-4 py-5 px-4 border-b border-slate-500">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-2 border-white object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center text-xl font-bold">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}

              <div className="flex flex-col overflow-hidden">
                <h2 className="text-2xl">Hey, {user.name || "User"} 👋</h2>

                <h1>Welcome back!</h1>
              </div>
            </div>
          )}
        </div>
      </ZoomIn>
      <ZoomIn delay={0.2}>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          <div className="col-span-3 lg:col-span-1 bg-gray-500 shadow rounded-lg mt-4 text-center">
            <h3 className="text-white text-lg mt-2 md:text-xl lg:text-2xl p-2">
              Total Employees
            </h3>

            <p className="text-2xl md:text-3xl text-white mb-4">
              {isLoading ? "..." : employees?.length || 0}
            </p>
          </div>
          <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
            <h2 className="text-white text-2xl my-2 p-2">
              Day Shift Employees
            </h2>
            <p className="text-3xl text-white">{dayShiftEmployees.length}</p>
          </div>

          <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
            <h2 className="text-white text-2xl my-2 p-2">
              Night Shift Employees
            </h2>
            <p className="text-3xl text-white mb-4">
              {nightShiftEmployees.length}
            </p>
          </div>

          <div className="bg-gray-500 shadow rounded-lg mt-4 text-center">
            <h2 className="text-white text-2xl my-2 p-1">
              Rotational Shift Employees
            </h2>
            <p className="text-3xl text-white mb-4">
              {rotationalShiftEmployees.length}
            </p>
          </div>
        </div>
      </ZoomIn>

      <div className="fixed bottom-20 md:bottom-4 left-0 w-full flex justify-center items-center py-3 overflow-hidden z-50">
        <AnimatePresence mode="wait">
          <motion.p
            key={tipIndex}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center text-sm sm:text-base md:text-lg font-medium text-gray-700 px-4"
          >
            🛡️ {securityTips[tipIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Dashboard;
