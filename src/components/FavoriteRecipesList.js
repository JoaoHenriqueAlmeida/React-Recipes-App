import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
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
  const [copiedMessage, setCopiedMessage] = useState('');
  const [favoriteRecipes,
    setFavoriteRecipes] = useState(JSON.parse(localStorage.getItem('favoriteRecipes')));

  return (
    <section>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => (
          setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')))) }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setFavoriteRecipes(JSON.parse(
          localStorage.getItem('favoriteRecipes'),
        ).filter((recipe) => (
          recipe.type === 'comida'))) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setFavoriteRecipes(JSON.parse(
          localStorage.getItem('favoriteRecipes'),
        ).filter((recipe) => (
          recipe.type === 'bebida'))) }
      >
        Drinks
      </button>
      { favoriteRecipes ? favoriteRecipes.map((recipe, index) => (
        recipe.type === 'comida'
          ? favoriteMealCard(recipe, index, copiedMessage, setCopiedMessage)
          : favoriteCocktailCard(
            recipe, index, copiedMessage, setCopiedMessage,
          ))) : null }
    </section>
  );
}
