import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link to="/bebidas">
        <img
          data-testid="drinks-bottom-btn"
          src="../images/drinkIcon.svg"
          alt="drinks"
        />
      </Link>
      <Link to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          src="../images/exploreIcon.svg"
          alt="explore"
        />
      </Link>
      <Link to="/comidas">
        <img
          data-testid="food-bottom-btn"
          src="../images/mealIcon.svg"
          alt="food"
        />
      </Link>
    </footer>
  );
}
