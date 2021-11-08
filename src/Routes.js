import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import MealDetails from './pages/MealDetails';
import InProgressMeal from './pages/InProgressMeal';
import Cocktails from './pages/Cocktails';
import CocktailDetails from './pages/CocktailDetails';
import InProgressCocktail from './pages/InProgressCocktail';
import Explore from './pages/Explore';
import ExploreMeals from './pages/ExploreMeals';
import ExploreMealIngredient from './pages/ExploreMealIngredient';
import ExploreCocktails from './pages/ExploreCocktails';
import ExploreCocktailIngredient from './pages/ExploreCocktailIngredient';
import ExploreByLocation from './pages/ExploreByLocation';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Meals } />
      <Route exact path="/comidas/{id-da-receita}" component={ MealDetails } />
      <Route
        exact
        path="/comidas/{id-da-receita}/in-progress"
        component={ InProgressMeal }
      />
      <Route exact path="/bebidas" component={ Cocktails } />
      <Route exact path="/bebidas/{id-da-receita}" component={ CocktailDetails } />
      <Route
        path="/bebidas/{id-da-receita}/in-progress"
        component={ InProgressCocktail }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreMeals } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreMealIngredient }
      />
      <Route exact path="/explorar/bebidas" component={ ExploreCocktails } />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreCocktailIngredient }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreByLocation } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
    </Switch>
  );
}
