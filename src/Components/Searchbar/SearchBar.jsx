import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="d-flex">
        <input className="form-control me-2 col-md-6 col-sm-6 col-12" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
