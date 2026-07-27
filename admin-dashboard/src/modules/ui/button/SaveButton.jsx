const SaveButton = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full sm:w-auto bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default SaveButton;