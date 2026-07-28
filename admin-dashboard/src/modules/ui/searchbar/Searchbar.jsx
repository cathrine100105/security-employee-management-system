const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full md:max-w-lg lg:max-w-xl">
      <input
        type="text"
        placeholder="Search by Guard ID, Name, Qualification, Location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          h-12
          px-4
          border
          border-black
          rounded-lg
          shadow-sm
          text-sm md:text-base
          focus:outline-none
        "
      />
    </div>
  );
};

export default SearchBar;
