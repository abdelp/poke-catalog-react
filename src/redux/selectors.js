import { VISIBILITY_FILTERS } from "../constants/visibilityFilters";
import visibilityFilter from "./reducers/visibilityFilter";

export const getPokemonsState = store => store.list;

export const getPokemonList = store =>
  getPokemonsState(store) ? getPokemonsState(store).allIds : [];

export const getPokemonById = (store, id) =>
  getPokemonList(store) ? { ...getPokemonsState(store).byIds[id], id } : {};

export const getPokemons = store =>
  getPokemonList(store).map(id => getPokemonById(store, id));

export const getPokemonsByVisibilityFilter = (store, visibilityFilter) => {
  const allPokemons = getPokemons(store);

  // switch(visibilityFilter) {
  //   case VISIBILITY_FILTERS.COMPLETED:
  //     return allPokemons.filter(pokemon => pokemon.completed);
  //   case VISIBILITY_FILTERS.INCOMPLETE:
  //     return allTodos.filter(todo => !todo.completed);
  //   case VISIBILITY_FILTERS.ALL:
  //   default:
      return allPokemons;
  // }
};