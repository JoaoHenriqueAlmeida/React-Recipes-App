import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';

export default function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const toShowSearchBar = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ toShowSearchBar }
      >
        <img
          src={ searchIcon }
          alt="SearchPicture"
          data-testid="search-top-btn"
        />
      </button>
      {!showInput
        ? null
        : (
          <input
            data-testid="search-input"
            type="text"
          />
        )}

    </div>
  );
}
