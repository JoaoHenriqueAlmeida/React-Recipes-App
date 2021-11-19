import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function Profile() {
  const [userEmail, setUserEmail] = useState();
  useEffect(() => {
    function getFromStorage() {
      setUserEmail(JSON.parse(localStorage.getItem('user')).email);
    }
    return getFromStorage();
  }, []);

  return (
    <>
      <HeaderWithoutSearchBar />
      <p data-testid="profile-email">{ userEmail }</p>
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
