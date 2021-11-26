import React, { useEffect, useState } from 'react';
import HeaderWithoutSearchBar from '../components/HeaderWithoutSearchBar';
import Footer from '../components/Footer';

export default function ExploreCocktailIngredient() {
  const [ingredientArray, setIngredientArray] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const results = await response.json();

      setIngredientArray(results.drinks);
    };
    fetchIngredients();
  }, []);
  const numberOfCards = 12;

  return (
    <>
      <HeaderWithoutSearchBar />
      { ingredientArray.map((ingredient, index) => (
        (index < numberOfCards) ? (
          <section key={ index } data-testid={ `${index}-ingredient-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt="ingredient"
            />
            <h1 data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</h1>
          </section>
        ) : null
      ))}
      <Footer />
    </>
  );
}
