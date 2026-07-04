import { Pencil } from "lucide-react";

const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
            flex
        items-center
        gap-2
        bg-green-400
        hover:bg-green-500
        text-white
        px-4
        py-2
        rounded-lg
        shadow-md
        transition-all
        duration-200
            "
    >
      <Pencil size={16} />
      Edit
    </button>
  );
};

export default EditButton;
