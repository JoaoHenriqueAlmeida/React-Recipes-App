import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';

import './InProgressRecipe.css';

export default function DoneRecipes() {
  const { id } = useParams();
  const { mealDetail, setMealDetail } = useContext(AppContext);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const jsonObj = await response.json();
      const mealDetails = jsonObj.meals[0];
      setMealDetail(mealDetails);
    };
    fetchMeal();
  }, []);

  const values = [];
  const measures = [];

  if (mealDetail) {
    Object.keys(mealDetail)
      .forEach((key) => {
        if (key.includes('strIngredient') && mealDetail[key]) {
          const ingredientNumber = key.split('strIngredient')[1];
          const measure = mealDetail[`strMeasure${ingredientNumber}`];
          values.push(mealDetail[key]);
          measures.push(measure);
        }
      });
  }

  const markAsDone = ({ target }) => {
    const item = target.parentElement;
    if (Object.values(item.classList)[0] === undefined) item.classList.add('completo');
    else item.classList.remove('completo');

    const recipesParsed = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { meals: 0 };
    const recipeNumber = Object.getOwnPropertyNames(recipesParsed.meals)[0];
    const toSpread = recipesParsed.meals[recipeNumber] || [];
    const recipesStringified = {
      cocktails: {

      },
      meals: {
        [id]: [...toSpread, target.id],
      },
    };

    if (localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(recipesStringified));
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {

      },
      meals: {
        [id]: [target.id],
      },
    }));
  };

  const recipesParsed = JSON.parse(localStorage.getItem('inProgressRecipes'))
  || { meals: 0 };
  const recipeNumber = Object.getOwnPropertyNames(recipesParsed.meals)[0];
  const storageArray = recipesParsed.meals[recipeNumber];
  return (
    <>
      <h2 data-testid="recipe-title">
        Título:
        {mealDetail.strMeal}
      </h2>
      <img
        className="img-recipe"
        data-testid="recipe-photo"
        src={ mealDetail.strMealThumb }
        alt="mealDetail.strMealThumb"
      />
      <p data-testid="recipe-category">
        Categoria:
        {mealDetail.strCategory}
      </p>
      <div className="recipes-list">
        <p> Ingredientes </p>
        { values.map((value, index) => (
          <label
            key={ index }
            htmlFor={ `${index}-check` }
            data-testid={ `${index}-ingredient-step` }
          >
            {`${value} - ${measures[index]}`}
            {localStorage.getItem('inProgressRecipes')
              ? (
                <input
                  id={ `${index}-check` }
                  key={ index }
                  type="checkbox"
                  onClick={ markAsDone }
                  defaultChecked={ storageArray[index] === `${index}-check` }
                />)
              : (
                <input
                  id={ `${index}-check` }
                  key={ index }
                  type="checkbox"
                  onClick={ markAsDone }
                />
              ) }
          </label>
        )) }
      </div>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h2 data-testid="instructions">Instruções</h2>
      <p>{mealDetail.strInstructions}</p>
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
