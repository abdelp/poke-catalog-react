import {
  POKEMONS_FETCH_SUCCESS,
  POKEMONS_FETCH_INIT,
  POKEMONS_FETCH_FAILURE,
  SET_FILTER,
} from './actionTypes';

export const AddPokemons = content => ({
  type: POKEMONS_FETCH_SUCCESS,
  payload: {
    pokemons: content,
  },
});

export const FetchInit = () => ({
  type: POKEMONS_FETCH_INIT
})

export const FetchFailure = state => ({
  type: POKEMONS_FETCH_FAILURE,
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
