import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './App.css';
import Navigation from '../Navigation';
import HomePage from '../Home';
import PokemonDetailsPage from '../PokemonDetails';

function App() {
  return (
    <>
      <Navigation />
      <hr />

      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.POKEMON_DETAILS} component={PokemonDetailsPage} />
      </Switch>
    </>
  );
}

export default App;
