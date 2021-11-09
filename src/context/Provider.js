import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [nameMenu, setNameMenu] = useState('');
  const [resultsAPI, setResultsAPI] = useState([]);

  async function fetchApiMealsOrDrinks(URL, FILTER_SEARCH, INPUT_SEARCH) {
    const response = await fetch(`https://www.${URL}.com/api/json/v1/1/${FILTER_SEARCH}=${INPUT_SEARCH}`);
    setResultsAPI(response.json());
  }

  const state = {
    nameMenu,
    setNameMenu,
    resultsAPI,
    fetchFunc: fetchApiMealsOrDrinks,
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
