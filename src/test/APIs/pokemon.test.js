import axios from 'axios';
import { getPokemons } from '../../APIs/pokemons';

jest.mock('axios');

describe('pokemons API', () => {
  it('fetches successfully pokemons data from the API', async () => {
    const data = { data: {
      pokemon_entries: [
        {entry_number: 1,
         pokemon_species: { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-species/1/" }},
        {entry_number: 2,
         pokemon_species: {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon-species/2/" }}
      ]}};

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getPokemons()).resolves.toEqual(data.data.pokemon_entries);
  });

  it('fetches erroneously data from the API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(getPokemons()).rejects.toThrow(errorMessage);
  });
});
