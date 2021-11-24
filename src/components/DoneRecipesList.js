import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import AppContext from '../context/AppContext';
// import DoneCocktailCard from './DoneCocktailCard';
// import DoneMealCard from './DoneMealCard';
import shareIcon from '../images/shareIcon.svg';
import './DoneRecipesList.css';

const doneMealCard = (recipe, index, copiedMessage, setCopiedMessage) => (
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

    <p
      data-testid={ `${index}-horizontal-done-date` }
    >
      {recipe.doneDate}
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
    {recipe.tags.map((tagName) => (
      <p
        data-testid={ `${index}-${tagName}-horizontal-tag` }
        key={ tagName }
      >
        {tagName}
      </p>
    ))}
  </section>
);

const doneCocktailCard = (recipe, index, copiedMessage, setCopiedMessage) => (
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
    <p
      data-testid={ `${index}-horizontal-done-date` }
    >
      {recipe.doneDate}
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
  </section>
);

export default function DoneRecipesList() {
  const {
    doneRecipes,
    setDoneRecipes,
    startingDoneRecipes,
  } = useContext(AppContext);

  const [copiedMessage, setCopiedMessage] = useState('');

  return (
    <section>
      { /* {doneRecipes.map((recipe, index) => (
        recipe.type === 'comida' ? <DoneMealCard /> : <DoneCocktailCard />
      )) } */ }
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => setDoneRecipes(startingDoneRecipes.map((recipe) => recipe)) }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => setDoneRecipes(startingDoneRecipes.filter((recipe) => (
          recipe.type === 'comida'))) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => setDoneRecipes(startingDoneRecipes.filter((recipe) => (
          recipe.type === 'bebida'))) }
      >
        Drinks
      </button>
      {doneRecipes.map((recipe, index) => (
        recipe.type === 'comida'
          ? doneMealCard(recipe, index, copiedMessage, setCopiedMessage)
          : doneCocktailCard(recipe, index, copiedMessage, setCopiedMessage))) }
    </section>
  );
}
