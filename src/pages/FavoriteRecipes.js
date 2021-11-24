import React from 'react';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';
import FavoriteRecipesList from '../components/FavoriteRecipesList';

export default function FavoriteRecipes() {
  return (
    <>
      <HeaderWithoutSearchBar />
      <FavoriteRecipesList />
    </>
  );
}
