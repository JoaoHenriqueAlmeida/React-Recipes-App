import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../images/profileIcon.svg';

export default function HeaderWithSearchBar() {
  const { nameMenu, setNameMenu } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/explorar') {
      setNameMenu('Explorar');
    }
    if (location.pathname === '/explorar/bebidas') {
      setNameMenu('Explorar Bebidas');
    }
    if (location.pathname === '/explorar/comidas') {
      setNameMenu('Explorar Comidas');
    }
    if (location.pathname === '/explorar/comidas/ingredientes'
      || location.pathname === '/explorar/bebidas/ingredientes') {
      setNameMenu('Explorar Ingredientes');
    }
    if (location.pathname === '/perfil') {
      setNameMenu('Perfil');
    }
    if (location.pathname === '/receitas-feitas') {
      setNameMenu('Receitas Feitas');
    }
    if (location.pathname === '/receitas-favoritas') {
      setNameMenu('Receitas Favoritas');
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
    </header>
  );
}
