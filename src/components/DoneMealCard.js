import React from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function DoneMealCard() {
  return (
    <section>
      <img
        data-testid={ `${index}-horizontal-image` }
        alt={ recipe.id }
        src={ recipe.image }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.area} - ${recipe.category}`}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {recipe.doneDate}
      </p>
      <button type="button">
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share button"
        />
      </button>
      {recipe.tags.map((tagName) => (
        <p
          data-testid={ `${index}-${tagName}-horizontal-tag` }
          key={ tagName }
        >
          {tagName}
        </p>
      ))}
      {recipe.alcoholicOrNot.includes('Alco')
        ? <p>{recipe.alcoholicOrNot}</p> : null }
    </section>
  );
}
