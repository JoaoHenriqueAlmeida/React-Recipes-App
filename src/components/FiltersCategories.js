import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

function FiltersCategories() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const { applyFilter, verifyLocation,
    filterState, setFilterState } = useContext(AppContext);

  async function fetchCategory() {
    if (location.pathname.includes('comidas')) {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const results = await response.json();
      setCategories(results.meals);
    }
    if (location.pathname.includes('bebidas')) {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const results = await response.json();
      setCategories(results.drinks);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  const FIVE = 5;
  return (
    <>
      <h1>Categorias</h1>
      <div>
        { categories && categories.map((category, index) => (
          index < FIVE ? (
            <button
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              key={ index }
              onClick={ () => applyFilter(category.strCategory) }
            >
              {category.strCategory}

            </button>) : null
        ))}
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={
            !filterState
              ? () => verifyLocation() : setFilterState(false)
          }
        >
          All
        </button>
      </div>
    </>
  );
}

export default FiltersCategories;
