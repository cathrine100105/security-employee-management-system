import { Trash2 } from "lucide-react";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex
        justify-center
        items-center
        gap-2
        bg-red-400
        hover:bg-red-500
        text-white
        px-4
        py-2
        rounded-lg
        shadow-md
        transition-all
        duration-200
      "
    >
      <Trash2 size={16} />
      Delete
    </button>
  );
};

export default DeleteButton;
