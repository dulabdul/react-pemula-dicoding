import React from 'react';
function Search({ keyword, titleChange }) {
  return (
    <div className='notes-search'>
      <i className='fa-solid fa-magnifying-glass' />
      <input
        type='text'
        placeholder='Search Notes'
        value={keyword}
        onChange={(e) => titleChange(e.target.value)}
      />
    </div>
  );
}
export default Search;
