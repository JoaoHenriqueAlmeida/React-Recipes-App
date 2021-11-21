import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import AppContext from '../context/AppContext';

import './MealDetails.css';

export default function MealDetails() {
  const { id } = useParams();
  const { mealDetail, setMealDetail } = useContext(AppContext);
  const [recommendedDrinks, setRecommendedDrinks] = useState([]);
  const [copiedMessage, setCopiedMessage] = useState('');
  const firstSixRecommendedCards = 6;
  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const jsonObj = await response.json();
      const mealDetails = jsonObj.meals[0];
      setMealDetail(mealDetails);
    };
    fetchMeal();
  }, []);

  // FETCH PARA DRINKS RECOMENDADOS

  useEffect(() => {
    const fetchRecomendados = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await response.json();

      setRecommendedDrinks(drinks.slice(0, firstSixRecommendedCards));
    };
    fetchRecomendados();
  }, []);

  const youtubeStr = mealDetail.strYoutube;

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

  return (
    <div className="details-container page-main">

      <img
        src={ mealDetail.strMealThumb }
        data-testid="recipe-photo"
        alt="recipe detail"
        height="200px"
      />

      <h2 data-testid="recipe-title">{ mealDetail.strMeal }</h2>

      <div className="buttons-container">
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => {
            setCopiedMessage('Link copiado!');
            copy(`http://localhost:3000/comidas/${id}`);
          } }
        >
          Compartilhar

        </button>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          Favoritar
        </button>
        <p>{copiedMessage}</p>
      </div>

      <p
        data-testid="recipe-category"
        className="category-text"
      >
        { mealDetail.strCategory }
      </p>

      <div className="details-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {
            values.map((ingredient, index) => {
              if (ingredient !== '' && index !== null) {
                return (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { ingredient }
                    { ' - ' }
                    { measures[index] }
                  </li>
                );
              }
              return null;
            })
          }
        </ul>
      </div>

      <div className="details-instructions">
        <h3>Instructions</h3>
        <p data-testid="instructions">{ mealDetail.strInstructions }</p>
      </div>

      <iframe
        src={ youtubeStr ? youtubeStr.replace('watch?v=', 'embed/') : null }
        frameBorder="0"
        data-testid="video"
        title="recipe"
        allowFullScreen
      />
      <h3>Recommendations</h3>
      <div className="flex carousel">
        {
          recommendedDrinks.map((recommended, index) => (
            <div
              key={ recommended.idDrink }
              data-testid={ `${index}-recomendation-card` }
              className="recipe-card"
            >
              <img
                src={ recommended.strDrinkThumb }
                alt={ recommended.strDrin }
                height="150px"
              />
              <p className="category-text">{ recommended.strCategory }</p>
              <p
                data-testid={ `${index}-recomendation-title` }
              >
                { recommended.strDrink }
              </p>
            </div>
          ))
        }
      </div>

      <Link to={ `/comidas/${id}/in-progress` }>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="start-button"
        >
          Start Recipe
        </button>
      </Link>
    </div>
  );
}
