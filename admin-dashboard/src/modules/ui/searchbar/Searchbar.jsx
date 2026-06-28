const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md px-6">
      <input
        type="text"
        placeholder="Search by name, guard Id,..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          px-4
          py-2
          border
          border-gray-300
          rounded-lg
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
          focus:border-blue-300
        "
      />
    </div>
  );
};

export default SearchBar;
