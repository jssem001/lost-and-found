import React from "react";

function Search({ search, onSearchChange }) {


  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }


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