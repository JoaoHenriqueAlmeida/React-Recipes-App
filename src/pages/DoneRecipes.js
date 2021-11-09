import React from 'react';
import DoneRecipesList from '../components/DoneRecipesList';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function DoneRecipes() {
  return (
    <>
      <HeaderWithoutSearchBar />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      <DoneRecipesList />
    </>
  );
}
