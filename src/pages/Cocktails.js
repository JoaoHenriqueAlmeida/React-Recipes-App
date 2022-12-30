import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import Footer from '../components/Footer.tsx';
import CardDrinks from '../components/CardDrinks';
import FiltersCategories from '../components/FiltersCategories';

export default function Cocktails() {
  const { fetchFunc } = useContext(AppContext);

  useEffect(() => {
    fetchFunc('thecocktaildb', 'search.php?s', '');
  }, []);

  return (
    <>
      <HeaderWithSearchBar />
      <FiltersCategories />
      <CardDrinks />
      <Footer />
    </>
  );
}
