import axios from 'axios';
import { getPokemon, getPokemons, API_BASE } from '../../APIs/pokemons';

jest.mock('axios');

describe('pokemons API', () => {
  it('fetches successfully pokemons data from the API', async () => {
    const data = { data: [
      {
        "count": 1050,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=3&limit=3",
        "previous": null,
        "results": [
          {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
          }
        ]
      }
    ]};

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getPokemons()).resolves.toEqual(data.data.pokemon_entries);

    expect(axios.get).toHaveBeenCalledWith(
      API_BASE,
    );
  });

  it('fetches erroneously data from the API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(getPokemons()).rejects.toThrow(errorMessage);
  });
});
