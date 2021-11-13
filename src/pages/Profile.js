import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function Profile() {
  useEffect(() => {
    function setOnStorage() {
      localStorage.setItem('user', '{ "email": "email@mail.com" }');
    }
    return setOnStorage();
  }, []);

  return (
    <>
      <HeaderWithoutSearchBar />
      <p data-testid="profile-email">{JSON.parse(localStorage.getItem('user')).email }</p>
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
