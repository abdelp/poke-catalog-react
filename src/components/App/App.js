import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

// import logo from './logo.svg';
import './App.css';
import Navigation from '../Navigation';
import HomePage from '../Home';
import PokemonDetailsPage from '../PokemonDetails';

import { getPokemons } from '../../APIs/pokemons';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />

        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.POKEMON_DETAILS} component={PokemonDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
