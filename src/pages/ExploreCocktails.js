import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function ExploreCocktails() {
  const history = useHistory();
  const [id, setId] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const results = await response.json();

      setId(results.drinks[0].idDrink);
    };
    fetchRecipe();
  });
  return (
    <>
      <HeaderWithoutSearchBar />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/bebidas/${id}`) }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
