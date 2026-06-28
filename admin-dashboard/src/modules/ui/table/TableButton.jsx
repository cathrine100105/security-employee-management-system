import { Trash2 } from "lucide-react";

const TableButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        gap-2
        mx-auto
        bg-red-500
        hover:bg-red-600
        text-white
        px-4
        py-2
        rounded-lg
        transition
      "
    >
      <Trash2 size={18} />
      Delete
    </button>
  );
};

export default TableButton;
