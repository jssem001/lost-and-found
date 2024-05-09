import React from "react";

function Search({ search, onSearchChange }) {
  // const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  // function handleSearchChange(event) {
  //   event.preventDefault();
  //   const searchTerm = event.target.value;
  //   setSearch(searchTerm);
  //   onSearchChange(searchTerm);
  // }

  return (
    <>
    <div className="space-2 mb-3">
      <input
        className="rounded" type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}
      />
      <button className="p-2 bg-blue-400 text-white rounded"> Search </button>
    </div>
    
    </>
  );
}

export default Search;