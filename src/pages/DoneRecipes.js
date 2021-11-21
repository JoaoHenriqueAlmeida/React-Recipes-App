import React from 'react';
import DoneRecipesList from '../components/DoneRecipesList';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function DoneRecipes() {
  return (
    <>
      <HeaderWithoutSearchBar />
      <DoneRecipesList />
    </>
  );
}
