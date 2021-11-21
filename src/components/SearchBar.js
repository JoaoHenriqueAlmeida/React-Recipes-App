// Processo de fetch dinâmico consultado no pull request do Grupo 9 da Tribo 14-B, pelo url:
// https://github.com/tryber/sd-014-b-project-recipes-app/pull/163/commits/c53bcba54e67b7d25c468844f54f572d7385975d;

import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import AppContext from '../context/AppContext';

export default function SearchBar() {
  const { fetchFunc } = useContext(AppContext);
  const location = useLocation();
  const [showInput, setShowInput] = useState(false);
  const [searchBarValues, setSearchBarValues] = useState({
    text: '',
    type: '',
  });

  const toShowSearchBar = () => {
    setShowInput(!showInput);
  };

  function handleSearchValues({ target: { value, name } }) {
    setSearchBarValues({
      ...searchBarValues,
      [name]: value,
    });
  }

  const FIRST_LETTER = 'first-letter';

  function searchValuesApi() {
    const { text, type } = searchBarValues;
    if (type === FIRST_LETTER && text.length >= 2) {
      return (
        global.alert('Sua busca deve conter somente 1 (um) caracter')
      );
    }

    if (location.pathname === '/comidas') {
      switch (type) {
      case 'ingredient':
        fetchFunc('themealdb', 'filter.php?i', text);
        break;
      case FIRST_LETTER:
        fetchFunc('themealdb', 'search.php?f', text);
        break;
      case 'name':
        fetchFunc('themealdb', 'search.php?s', text);
        break;
      default:
        break;
      }
    }

    if (location.pathname === '/bebidas') {
      switch (type) {
      case 'ingredient':
        fetchFunc('thecocktaildb', 'filter.php?i', text);
        break;
      case FIRST_LETTER:
        fetchFunc('thecocktaildb', 'search.php?f', text);
        break;
      case 'name':
        fetchFunc('thecocktaildb', 'search.php?s', text);
        break;
      default:
        break;
      }
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={ toShowSearchBar }
      >
        <img
          src={ searchIcon }
          alt="SearchPicture"
          data-testid="search-top-btn"
        />
      </button>
      {!showInput
        ? null
        : (
          <div>
            <input
              data-testid="search-input"
              type="text"
              name="text"
              placeholder="Busque sua receita aqui"
              onChange={ (event) => handleSearchValues(event) }
            />
            <label htmlFor="ingredient">
              Ingrediente
              <input
                type="radio"
                data-testid="ingredient-search-radio"
                name="type"
                id="ingredient"
                value="ingredient"
                onClick={ (event) => handleSearchValues(event) }
              />
            </label>
            <label htmlFor="name">
              Nome
              <input
                type="radio"
                data-testid="name-search-radio"
                name="type"
                value="name"
                id="name"
                onClick={ (event) => handleSearchValues(event) }
              />
            </label>
            <label htmlFor="first-letter">
              Primeira letra
              <input
                type="radio"
                data-testid="first-letter-search-radio"
                name="type"
                value="first-letter"
                id="first-letter"
                onClick={ (event) => handleSearchValues(event) }
              />
            </label>
            <button
              type="button"
              data-testid="exec-search-btn"
              onClick={ searchValuesApi }
            >
              Buscar
            </button>
          </div>
        )}
    </div>
  );
}
