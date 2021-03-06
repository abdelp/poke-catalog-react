import {
  POKEMONS_FETCH_INIT, POKEMONS_FETCH_SUCCESS, POKEMONS_FETCH_FAILURE,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  pokemons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POKEMONS_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POKEMONS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        pokemons: action.payload.pokemons,
      };
    case POKEMONS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
