const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search by Guard ID, Name, Qualification, Location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-100
          h-15
          px-3
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
