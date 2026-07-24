const Table = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-max w-full">{children}</table>
      </div>
    </div>
  );
};

export default Table;
