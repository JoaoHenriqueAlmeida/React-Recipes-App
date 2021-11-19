import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

import './InProgressRecipe.css';

export default function DoneRecipes() {
  const { id } = useParams();
  const { drinkDetails, setDrinkDetails } = useContext(AppContext);

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const jsonObj = await response.json();
      const drinkDetail = jsonObj.drinks[0];
      setDrinkDetails(drinkDetail);
    };
    fetchDrinks();
  }, []);

  const values = [];
  const measures = [];

  if (drinkDetails) {
    Object.keys(drinkDetails)
      .forEach((key) => {
        if (key.includes('strIngredient') && drinkDetails[key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = drinkDetails[`strMeasure${ingredientNumber}`];
          values.push(drinkDetails[key]);
          measures.push(measure);
        }
      });
  }

  const markAsDone = ({ target }) => {
    const item = target.parentElement;
    if (Object.values(item.classList)[0] === undefined) item.classList.add('completo');
    else item.classList.remove('completo');
  };

  return (
    <>
      <h2 data-testid="recipe-title">
        Título:
        {drinkDetails.strDrink}
      </h2>
      <img
        className="img-recipe"
        data-testid="recipe-photo"
        src={ drinkDetails.strDrinkThumb }
        alt="strDrinkThumb"
      />
      <p data-testid="recipe-category">
        Categoria:
        {drinkDetails.strCategory}
      </p>
      <div className="recipes-list">
        <p> Ingredientes </p>
        { values.map((value, index) => (
          <label key={ index } htmlFor={ `${index}-check` } data-testid={ `${index}-ingredient-step` }>
            {`${value} - ${measures[index]}`}
            <input
              id={ `${index}-check` }
              key={ index }
              type="checkbox"
              onClick={ markAsDone }
            />
          </label>
        )) }
      </div>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h2 data-testid="instructions">Instruções</h2>
      <p>{drinkDetails.strInstructions}</p>
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
        >
          Finalizar
        </button>
      </Link>
    </>
  );
}
