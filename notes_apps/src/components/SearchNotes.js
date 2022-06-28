import React from 'react';

function Search({ onSearch }) {
  return (
    <div className="notes-search">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search Notes" onChange={(e) => onSearch(e)} />
    </div>
  );
}

export default Search;
