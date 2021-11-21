// Processo de fetch dinâmico consultado no pull request do Grupo 9 da Tribo 14-B, pelo url:
// https://github.com/tryber/sd-014-b-project-recipes-app/pull/163/commits/c53bcba54e67b7d25c468844f54f572d7385975d;

import React, { useState, useContext } from 'react';
import searchIcon from '../images/searchIcon.svg';
import AppContext from '../context/AppContext';

export default function SearchBar() {
  const { searchBarValues, setSearchBarValues, useSearch } = useContext(AppContext);
  const [showInput, setShowInput] = useState(false);

  const toShowSearchBar = () => {
    setShowInput(!showInput);
  };

  function handleSearchValues({ target: { value, name } }) {
    setSearchBarValues({
      ...searchBarValues,
      [name]: value,
    });
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
              onClick={ useSearch }
            >
              Buscar
            </button>
          </div>
        )}
    </div>
  );
}
