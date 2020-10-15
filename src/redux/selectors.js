import VISIBILITY_FILTERS from '../constants/visibilityFilters';

export const getPokemonsState = store => store.data.pokemons;

export const getPokemonList = store => (getPokemonsState(store) ? getPokemonsState(store) : []);

export const getPokemonById = (store, id) => (getPokemonList(store)
  ? getPokemonsState(store)
    .filter(pokemon => pokemon.id === id)
  : {});

export const getPokemonsByVisibilityFilter = (store, visibilityFilter) => {
  const allPokemons = getPokemonList(store);

  if (visibilityFilter === VISIBILITY_FILTERS.ALL) {
    return allPokemons;
  }
  return allPokemons
    .filter(pokemon => pokemon.types
      .filter(type => type.type.name === visibilityFilter.toLowerCase()).length > 0);
};
