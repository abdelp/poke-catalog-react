import axios from 'axios';
import { getPokemon, getPokemons, API_BASE } from '../../APIs/pokemons';
import pokemons from './pokemons.json';
import pokemon from './pokemon.json';
import result from './result.json';

jest.mock('axios');

describe('pokemons API', () => {
  it('fetches successfully pokemons data from the API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(pokemons));
    axios.get.mockImplementationOnce(() => Promise.resolve(pokemon));

    await expect(getPokemons()).resolves.toEqual(result);
  });

  it('fetches erroneously data from the API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getPokemons()).rejects.toThrow(errorMessage);
  });
});
