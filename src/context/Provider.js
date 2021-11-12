import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const startingDoneRecipes = [
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

export default function Provider({ children }) {
  const history = useHistory();
  const location = useLocation();
  const [nameMenu, setNameMenu] = useState('');
  const [doneRecipes, setDoneRecipes] = useState(startingDoneRecipes);

  // trecho de código abaixo está em hardCode, será dinâmico assim que as receitas feitas forem para o contexto;
  const [resultsAPI, setResultsAPI] = useState([]);
  const [loading, setLoading] = useState(false);

  const verifyArraySize = () => {
    if (resultsAPI.length === 1) {
      if (location.pathname.includes('comidas')) {
        history.push(`/comidas/${resultsAPI[0].idMeal}`);
      }
      if (location.pathname.includes('bebidas')) {
        history.push(`/bebidas/${resultsAPI[0].idDrink}`);
      }
    }
  };

  async function fetchApiMealsOrDrinks(URL, FILTER_SEARCH, INPUT_SEARCH) {
    setLoading(true);
    const response = await fetch(`https://www.${URL}.com/api/json/v1/1/${FILTER_SEARCH}=${INPUT_SEARCH}`);
    const results = await response.json();

    if (URL === 'themealdb') {
      setResultsAPI(results.meals);
    }
    if (URL === 'thecocktaildb') {
      setResultsAPI(results.drinks);
    }

    if (resultsAPI && resultsAPI.length === 0) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }

    setLoading(false);
  }

  useEffect(() => {
    if (resultsAPI) {
      verifyArraySize();
    }
  });

  const state = {
    nameMenu,
    setNameMenu,
    doneRecipes,
    setDoneRecipes,
    startingDoneRecipes,
    resultsAPI,
    fetchFunc: fetchApiMealsOrDrinks,
    loading,
  };

  return (
    <AppContext.Provider value={ state }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
