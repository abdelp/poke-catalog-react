import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2/pokedex/1';

const getPokemons = async () => {
  try {
    const RESULT = await axios.get(API_BASE);

    return RESULT.data.pokemon_entries.slice(0, 3);
  } catch (e) {
    throw new Error(e);
  }
};

export { getPokemons, API_BASE };