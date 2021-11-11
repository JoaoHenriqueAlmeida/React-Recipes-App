import React from 'react';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import Footer from '../components/Footer';
import CardMeals from '../components/CardMeals';

export default function Meals() {
  return (
    <>
      <HeaderWithSearchBar />
      <CardMeals />
      <Footer />
    </>
  );
}
