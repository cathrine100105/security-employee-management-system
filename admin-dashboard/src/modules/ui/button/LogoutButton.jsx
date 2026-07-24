import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/authentication", { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 mt-auto text-white text-center px-4 py-2 font-medium transition duration-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
