import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import pokemons from './pokemons';

export default combineReducers({ data: pokemons, visibilityFilter });