import React from 'react';
import { Link } from 'react-router-dom';
// import DoneCocktailCard from './DoneCocktailCard';
// import DoneMealCard from './DoneMealCard';
import shareIcon from '../images/shareIcon.svg';
import './DoneRecipesList.css';

// trecho de código abaixo está em hardCode, será dinâmico assim que as receitas feitas forem para o contexto;
const doneRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

const doneMealCard = (recipe, index) => (
  <section>
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
    <button type="button">
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share button"
      />
    </button>
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

const doneCocktailCard = (recipe, index) => (
  <section>
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
    <button type="button">
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share button"
      />
    </button>
  </section>
);

export default function DoneRecipesList() {
  return (
    <section>
      { /* {doneRecipes.map((recipe, index) => (
        recipe.type === 'comida' ? <DoneMealCard /> : <DoneCocktailCard />
      )) } */ }
      {doneRecipes.map((recipe, index) => (
        recipe.type === 'comida'
          ? doneMealCard(recipe, index) : doneCocktailCard(recipe, index))) }
    </section>
  );
}
