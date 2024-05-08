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
    <div className="space-2">
      <input
        type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}
      />
      <button className="p-2 bg-gray-600 text-white rounded"> Search </button>
    </div>
  );
}

export default Search;