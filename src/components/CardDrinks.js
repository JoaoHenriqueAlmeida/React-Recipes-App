import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function CardDrinks() {
  const { loading, resultsAPI } = useContext(AppContext);
  const TWELVE = 12;
  return (
    <>
      <h1>Receitas</h1>
      { loading ? <h3>loading...</h3> : (
        <div>
          { resultsAPI && resultsAPI.map((recipe, index) => (
            index < TWELVE ? (
              <div data-testid={ `${index}-recipe-card` } key={ index }>
                <img
                  data-testid={ `${index}-card-img` }
                  alt={ `${index}-recipe-card` }
                  src={ recipe.strDrinkThumb }
                  width="300px"
                />
                <h2 data-testid={ `${index}-card-name` }>{ recipe.strDrink }</h2>
              </div>) : null
          ))}
        </div>
      )}
    </>
  );
}
