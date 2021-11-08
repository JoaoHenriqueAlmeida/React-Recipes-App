import React from 'react';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar() {
/*   const toShowSearchBar = () => {
    if (!clickSearchButton) {
      return (

      );
    }
    if (clickSearchButton) {
      return (
        <input
          className="inputSearchBar"
          data-testid="search-input"
        />
      );
    }
  }; */

  return (
    <div>
      <button
        type="button"
        // onClick={ toShowSearchBar }
      >
        <img
          src={ searchIcon }
          alt="SearchPicture"
          data-testid="search-top-btn"
        />
      </button>
      <input
        className="InputSearchBar"
        data-testid="search-input"
      />
    </div>
  );
}
