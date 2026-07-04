import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex
        items-center
        gap-2
        bg-gray-500
        hover:bg-gray-800
        text-white
        px-4
        py-2
        rounded-lg
        shadow-md
        transition-all
        duration-200
      "
    >
      <ArrowLeft size={18} />
    </button>
  );
};

export default BackButton;