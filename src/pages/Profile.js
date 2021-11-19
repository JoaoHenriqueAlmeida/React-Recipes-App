import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function Profile() {
  const storageEmail = JSON.parse(localStorage.getItem('user'));
  const getEmail = storageEmail ? Object.values(storageEmail)[0] : 'email@email.com';

  return (
    <>
      <HeaderWithoutSearchBar />
      <p data-testid="profile-email">{ getEmail }</p>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn" type="button">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          data-testid="profile-favorite-btn"
          type="button"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>

      <Footer />
    </>
  );
}
