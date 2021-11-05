import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const toSearchBar = () => {
    console.log('abriu');
  };

  return (
    <header>
      <Link to="/perfil">
        <img
          src="../images/profileIcon.svg"
          alt="ProfilePicture"
          data-testid="profile-top-btn"
        />
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <button
        onClick={ toSearchBar }
        type="button"
      >
        <img
          src="../images/searchIcon.svg"
          alt="SearchPicture"
          data-testid="search-top-btn"
        />
      </button>
    </header>
  );
}
