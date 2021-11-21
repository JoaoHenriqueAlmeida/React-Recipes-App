import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

const startingFavoriteRecipes = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

export default function Provider({ children }) {
  const location = useLocation();
  const [nameMenu, setNameMenu] = useState('');
  const [doneRecipes, setDoneRecipes] = useState(startingDoneRecipes);
  const [favoriteRecipes, setFavoriteRecipes] = useState(startingFavoriteRecipes);
  // trecho de código abaixo está em hardCode, será dinâmico assim que as receitas feitas forem para o contexto;
  const [resultsAPI, setResultsAPI] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [filterState, setFilterState] = useState(false);
  const [mealId, setMealId] = useState('');
  const [drinkId, setDrinkId] = useState('');
  const [arraySize, setArraySize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [mealDetail, setMealDetail] = useState({});
  const [searchBarValues, setSearchBarValues] = useState({
    text: '',
    type: '',
  });

  /* const verifyArraySize = () => {
    if (resultsAPI.length === 1) {
      if (location.pathname.includes('comidas')) {
        history.push(`/comidas/${resultsAPI[0].idMeal}`);
      }
      if (location.pathname.includes('bebidas')) {
        history.push(`/bebidas/${resultsAPI[0].idDrink}`);
      }
    }
  }; */

  async function fetchApiMealsOrDrinks(URL, FILTER_SEARCH, INPUT_SEARCH) {
    setLoading(true);
    const response = await fetch(`https://www.${URL}.com/api/json/v1/1/${FILTER_SEARCH}=${INPUT_SEARCH}`);
    const results = await response.json();

    if (results && URL === 'themealdb') {
      setResultsAPI(results.meals);
    }
    if (results && URL === 'thecocktaildb') {
      setResultsAPI(results.drinks);
    }

    setLoading(false);
  }

  const SEARCH_PHP_S = 'search.php?s';
  const verifyLocation = () => {
    if (location.pathname.includes('comidas')) {
      fetchApiMealsOrDrinks('themealdb', SEARCH_PHP_S, '');
    }
    if (location.pathname.includes('bebidas')) {
      fetchApiMealsOrDrinks('thecocktaildb', SEARCH_PHP_S, '');
    }
  };

  const useSearch = async () => {
    const FIRST_LETTER = 'first-letter';
    const { text, type } = searchBarValues;
    setArraySize(true);

    if (type === FIRST_LETTER && text.length >= 2) {
      return (
        global.alert('Sua busca deve conter somente 1 (um) caracter')
      );
    }

    if (location.pathname === '/comidas') {
      switch (type) {
      case 'ingredient':
        fetchApiMealsOrDrinks('themealdb', 'filter.php?i', text);
        break;
      case FIRST_LETTER:
        fetchApiMealsOrDrinks('themealdb', 'search.php?f', text);
        break;
      case 'name':
        fetchApiMealsOrDrinks('themealdb', SEARCH_PHP_S, text);
        break;
      default:
        break;
      }
    }

    if (location.pathname === '/bebidas') {
      switch (type) {
      case 'ingredient':
        fetchApiMealsOrDrinks('thecocktaildb', 'filter.php?i', text);
        break;
      case FIRST_LETTER:
        fetchApiMealsOrDrinks('thecocktaildb', 'search.php?f', text);
        break;
      case 'name':
        fetchApiMealsOrDrinks('thecocktaildb', SEARCH_PHP_S, text);
        break;
      default:
        break;
      }
    }
  };

  const applyFilter = (category) => {
    if (location.pathname === '/comidas' && currentCategory !== category) {
      fetchApiMealsOrDrinks('themealdb', 'filter.php?c', category);
      setCurrentCategory(category);
      setFilterState(true);
    }
    if (location.pathname === '/bebidas' && currentCategory !== category) {
      fetchApiMealsOrDrinks('thecocktaildb', 'filter.php?c', category);
      setCurrentCategory(category);
      setFilterState(true);
    }
    if (location.pathname === '/comidas' && currentCategory === category) {
      fetchApiMealsOrDrinks('themealdb', SEARCH_PHP_S, '');
      setCurrentCategory('');
      setFilterState(false);
    }
    if (location.pathname === '/bebidas' && currentCategory === category) {
      fetchApiMealsOrDrinks('thecocktaildb', SEARCH_PHP_S, '');
      setCurrentCategory('');
      setFilterState(false);
    }
  };

  /*   useEffect(() => {
    if (resultsAPI) {
      verifyArraySize();
    }
  }); */

  const state = {
    nameMenu,
    setNameMenu,
    doneRecipes,
    setDoneRecipes,
    startingDoneRecipes,
    resultsAPI,
    fetchFunc: fetchApiMealsOrDrinks,
    loading,
    favoriteRecipes,
    setFavoriteRecipes,
    startingFavoriteRecipes,
    currentCategory,
    setCurrentCategory,
    filterState,
    setFilterState,
    searchBarValues,
    setSearchBarValues,
    verifyLocation,
    setMealId,
    mealId,
    setDrinkId,
    drinkId,
    arraySize,
    setArraySize,
    applyFilter,
    useSearch,
    drinkDetails,
    setDrinkDetails,
    mealDetail,
    setMealDetail,
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
