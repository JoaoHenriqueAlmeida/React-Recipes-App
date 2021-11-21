import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function CardDrinks() {
  const history = useHistory();
  const { loading, resultsAPI, arraySize } = useContext(AppContext);
  const TWELVE = 12;
  const globalAlert = () => {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  };

  return (
    <>
      {resultsAPI === null
        ? globalAlert()
        : (resultsAPI.length === 1 && arraySize)
          && history.push(`/bebidas/${resultsAPI[0].idDrink}`)}
      <h1>Receitas</h1>
      { loading ? <h3>loading...</h3> : (
        <div>
          { resultsAPI && resultsAPI.map((recipe, index) => (
            index < TWELVE ? (
              <div data-testid={ `${index}-recipe-card` } key={ index }>
                <Link to={ `/bebidas/${recipe.idDrink}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    alt={ `${index}-recipe-card` }
                    src={ recipe.strDrinkThumb }
                    width="300px"
                  />
                  <h2 data-testid={ `${index}-card-name` }>{ recipe.strDrink }</h2>
                </Link>
              </div>) : null
          ))}
        </div>
      )}
    </>
  );
}
