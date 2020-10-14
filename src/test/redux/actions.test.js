import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';
import pokemons from '../jsons/pokemons.json';

describe('actions', () => {
  it('should create an action to add pokemons', () => {
    const expectedAction = {
      type: types.POKEMONS_FETCH_SUCCESS,
      payload: {
        pokemons
      }
    };

    expect(actions.AddPokemons(pokemons)).toEqual(expectedAction);
  });

  it('should create an action to set the filter of types of pokemons', () => {
    const filter = types.ALL;
    const expectedAction = {
      type: types.SET_FILTER,
      payload: { filter }
    };

    expect(actions.setFilter(types.ALL)).toEqual(expectedAction);
  });
});