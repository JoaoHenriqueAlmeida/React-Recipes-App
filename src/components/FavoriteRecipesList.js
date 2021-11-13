import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import AppContext from '../context/AppContext';
// import favoriteCocktailCard from './favoriteCocktailCard';
// import favoriteMealCard from './favoriteMealCard';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import './FavoriteRecipesList.css';

const favoriteMealCard = (recipe, index, copiedMessage, setCopiedMessage) => (
  <section key={ index }>
    <Link to={ `/comidas/${recipe.id}` }>
      <img
        data-testid={ `${index}-horizontal-image` }
        alt={ recipe.id }
        src={ recipe.image }
        className="img"
      />
      <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
    </Link>

    <p
      data-testid={ `${index}-horizontal-top-text` }
    >
      { `${recipe.area} - ${recipe.category}`}
    </p>
    <button
      type="button"
      onClick={ () => {
        setCopiedMessage('Link copiado!');
        copy(`http://localhost:3000/comidas/${recipe.id}`);
      } }
    >
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share button"
      />
    </button>
    <p>{copiedMessage}</p>
    <button
      type="button"
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt={ `${index} unfavorite icon` }
      />
    </button>
  </section>
);

const favoriteCocktailCard = (recipe, index, copiedMessage, setCopiedMessage) => (
  <section key={ index }>
    <Link to={ `/bebidas/${recipe.id}` }>
      <img
        data-testid={ `${index}-horizontal-image` }
        key={ index }
        alt={ recipe.id }
        src={ recipe.image }
        className="img"
      />
      <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
    </Link>
    <p
      data-testid={ `${index}-horizontal-top-text` }
    >
      {recipe.alcoholicOrNot}
    </p>
    <button
      type="button"
      onClick={ () => {
        setCopiedMessage('Link copiado!');
        copy(`http://localhost:3000/bebidas/${recipe.id}`);
      } }
    >
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share button"
      />
    </button>
    <p>{copiedMessage}</p>
    <button
      type="button"
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt={ `${index} unfavorite icon` }
      />
    </button>
  </section>
);

export default function FavoriteRecipesList() {
  const {
    favoriteRecipes,
    setFavoriteRecipes,
    startingFavoriteRecipes,
  } = useContext(AppContext);

  const [copiedMessage, setCopiedMessage] = useState('');
  return (
    <section>
      { /* {favoriteRecipes.map((recipe, index) => (
        recipe.type === 'comida' ? <favoriteMealCard /> : <favoriteCocktailCard />
      )) } */ }
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => (
          setFavoriteRecipes(startingFavoriteRecipes.map((recipe) => recipe))) }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFavoriteRecipes(startingFavoriteRecipes.filter((recipe) => (
          recipe.type === 'comida'))) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFavoriteRecipes(startingFavoriteRecipes.filter((recipe) => (
          recipe.type === 'bebida'))) }
      >
        Drinks
      </button>
      {favoriteRecipes.map((recipe, index) => (
        recipe.type === 'comida'
          ? favoriteMealCard(recipe, index, copiedMessage, setCopiedMessage)
          : favoriteCocktailCard(recipe, index, copiedMessage, setCopiedMessage))) }
    </section>
  );
}
