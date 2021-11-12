import React, { useState } from 'react';
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
  const [nameMenu, setNameMenu] = useState('');
  const [doneRecipes, setDoneRecipes] = useState(startingDoneRecipes);

  // trecho de código abaixo está em hardCode, será dinâmico assim que as receitas feitas forem para o contexto;

  const state = {
    nameMenu,
    setNameMenu,
    doneRecipes,
    setDoneRecipes,
    startingDoneRecipes,
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
