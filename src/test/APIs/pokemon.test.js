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
});

// jest.mock('axios');
 
// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             objectID: '1',
//             title: 'a',
//           },
//           {
//             objectID: '2',
//             title: 'b',
//           },
//         ],
//       },
//     };
 
//     axios.get.mockImplementationOnce(() => Promise.resolve(data));
//   });
 
//   it('fetches erroneously data from an API', async () => {
//     const errorMessage = 'Network Error';
 
//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );
//   });
// });