import React from 'react';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import Footer from '../components/Footer';
import CardDrinks from '../components/CardDrinks';

export default function Cocktails() {
  return (
    <>
      <HeaderWithSearchBar />
      <CardDrinks />
      <Footer />
    </>
  );
}
