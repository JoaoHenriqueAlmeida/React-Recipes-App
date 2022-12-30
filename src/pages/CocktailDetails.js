import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../assets/icons/whiteHeartIcon.svg';
import blackHeartIcon from '../assets/icons/blackHeartIcon.svg';
import AppContext from '../context/AppContext';

export default function CocktailDetails() {
  const { id } = useParams();
  const { drinkDetails, setDrinkDetails,
    favoriteHeart, setFavoriteHeart, toFavorite } = useContext(AppContext);
  const [recommendedFoods, setRecommendedFoods] = useState([]);
  const [copiedMessage, setCopiedMessage] = useState('');
  const firstSixRecommendedCards = 6;
  const values = []; // usar na renderização de ingredientes
  const measures = []; // usar na renderização de medidas dos ingredientes
  console.log(drinkDetails);
  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const jsonObj = await response.json();
      const drinkDetail = jsonObj.drinks[0];
      setDrinkDetails(drinkDetail);
    };
    fetchDrinks();
  }, []);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      const arrayStorage = JSON.parse(localStorage.getItem('favoriteRecipes'))
        .map((recipe) => recipe.id);
      setFavoriteHeart(arrayStorage.includes(id));
    }
  }, []);

  useEffect(() => {
    const fetchRecommended = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();

      setRecommendedFoods(meals.slice(0, firstSixRecommendedCards));
    };
    fetchRecommended();
  }, []);

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

  return (
    <div className="details-container page-main">

      <div>
        <img
          src={ drinkDetails.strDrinkThumb }
          alt={ drinkDetails.strDrink }
          data-testid="recipe-photo"
          height="200px"
        />
        <h3 data-testid="recipe-title">{ drinkDetails.strDrink }</h3>
      </div>

      <div className="buttons-container">
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => {
            setCopiedMessage('Link copiado!');
            copy(`http://localhost:3000/bebidas/${id}`);
          } }
        >
          Compartilhar

        </button>
        {favoriteHeart
          ? (
            <button
              type="button"
              data-testid="favorite-btn"
              onClick={ () => toFavorite(id) }
              src={ blackHeartIcon }
              alt="heart"
            >
              <img src={ blackHeartIcon } alt="Heart" />
            </button>
          )
          : (
            <button
              type="button"
              data-testid="favorite-btn"
              onClick={ () => toFavorite(id) }
              src={ whiteHeartIcon }
              alt="heart"
            >
              <img src={ whiteHeartIcon } alt="Heart" />
            </button>
          ) }
        <p>{copiedMessage}</p>
      </div>

      <h4
        data-testid="recipe-category"
        className="category-text"
      >
        { drinkDetails.strAlcoholic }
      </h4>

      <div className="details-ingredients">
        <div>
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

        <div className="details-instruction">
          <h3>Instructions</h3>
          <p data-testid="instructions">{ drinkDetails.strInstructions }</p>
        </div>

        <div>
          <h3>Recomendations</h3>
          <div className="flex carousel">
            {
              recommendedFoods.map((recommended, index) => (
                <div
                  key={ recommended.idMeal }
                  data-testid={ `${index}-recomendation-card` }
                  className="recipe-card"
                >
                  <img
                    src={ recommended.strMealThumb }
                    alt={ recommended.strMeal }
                    height="150px"
                  />
                  <p className="category-text">{ recommended.strCategory }</p>
                  <p data-testid={ `${index}-recomendation-title` }>
                    { recommended.strMeal }
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Link to={ `/bebidas/${id}/in-progress` }>
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
