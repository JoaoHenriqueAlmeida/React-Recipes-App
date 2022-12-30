import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import HeaderWithSearchBar from '../components/HeaderWithSearchBar';
import Footer from '../components/Footer.tsx';
import CardMeals from '../components/CardMeals';
import FiltersCategories from '../components/FiltersCategories';

export default function Meals() {
  const { fetchFunc } = useContext(AppContext);

  useEffect(() => {
    fetchFunc('themealdb', 'search.php?s', '');
  }, []);

  return (
    <>
      <HeaderWithSearchBar />
      <FiltersCategories />
      <CardMeals />
      <Footer />
    </>
  );
}
