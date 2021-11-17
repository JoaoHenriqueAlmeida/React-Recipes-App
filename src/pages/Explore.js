import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function Explore() {
  return (
    <>
      <HeaderWithoutSearchBar />
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">
          Explorar comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas" data-testid="explore-drinks">
        <button type="button">
          Explorar bebidas
        </button>
      </Link>
      <Footer />
    </>
  );
}
