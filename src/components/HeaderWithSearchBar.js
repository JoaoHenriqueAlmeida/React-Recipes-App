import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../assets/icons/profileIcon.svg';
import SearchBar from './SearchBar';

export default function HeaderWithSearchBar() {
  const { nameMenu, setNameMenu } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/bebidas') {
      setNameMenu('Bebidas');
    }
    if (location.pathname === '/comidas') {
      setNameMenu('Comidas');
    }
    if (location.pathname === '/explorar/comidas/area') {
      setNameMenu('Explorar Origem');
    }
  });

  return (
    <header>
      <Link to="/perfil">
        <img
          src={ profileIcon }
          alt="ProfilePicture"
          data-testid="profile-top-btn"
        />
      </Link>
      <h1 data-testid="page-title">{ nameMenu }</h1>
      <SearchBar />
    </header>
  );
}
