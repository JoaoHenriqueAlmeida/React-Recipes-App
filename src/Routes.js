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
      <Route path="/comidas/{id-da-receita}" component={ MealDetails } />
      <Route path="/comidas/{id-da-receita}/in-progress" component={ InProgressMeal } />
      <Route exact path="/bebidas" component={ Cocktails } />
      <Route path="/bebidas/{id-da-receita}" component={ CocktailDetails } />
      <Route
        path="/bebidas/{id-da-receita}/in-progress"
        component={ InProgressCocktail }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route path="/explorar/comidas" component={ ExploreMeals } />
      <Route path="/explorar/comidas/ingredientes" component={ ExploreMealIngredient } />
      <Route path="/explorar/bebidas" component={ ExploreCocktails } />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExploreCocktailIngredient }
      />
      <Route path="/explorar/comidas/area" component={ ExploreByLocation } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ DoneRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
    </Switch>
  );
}
