import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';

export default function ExploreMeals() {
  const history = useHistory();
  const [id, setId] = useState();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const results = await response.json();

      setId(results.meals[0].idMeal);
    };
    fetchRecipe();
  }, []);

  return (

    <>
      <HeaderWithoutSearchBar />
      <Link to="/explorar/comidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button
          type="button"
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => history.push(`/comidas/${id}`) }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}
