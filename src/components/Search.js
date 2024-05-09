import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    event.preventDefault();
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onSearchChange(searchTerm);
  }

  return (
    <div className="">
      <input
        className="rounded m-2" type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange} required
      />
      <button onClick={handleSearchChange} className="p-2 bg-gray-500 text-white rounded hover:bg-blue-400 "> Search </button>
    </div>
  );
}

export default Search;