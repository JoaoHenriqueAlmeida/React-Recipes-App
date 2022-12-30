import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function Explore() {
  return (
    <>
      <HeaderWithoutSearchBar />
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas" data-testid="explore-drinks">
        <button type="button">
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </>
  );
}
