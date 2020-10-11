import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2';

const pad = (num, size) => {
  const s = `00${num}`;
  return s.substr(s.length-size);
}

const capitalStr = phrase => phrase.replace(/^\w/, c => c.toUpperCase());

const getPokemon = async (url) => {
  try {
    const {
      data: {
        id,
        name,
        types
      }
    } = await axios.get(url);

    const img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return { id: id, number: pad(id, 3), name: capitalStr(name), types, img };
  } catch (e) {
    throw new Error(e);
  }
};

const getPokemons = async () => {
  try {
    const { data: { results } } = await axios.get(`${API_BASE}/pokemon?limit=10`);
    let pokemons = [];

    await Promise.all(results.map(async (pokemon) => {
      const pokemonData = await getPokemon(pokemon.url);

      pokemons.push(pokemonData);
    }));

    return pokemons;
  } catch (e) {
    throw new Error(e);
  }
};

const getPokemonDetails = async (pokemonId) => {
  try {
    const {
      data: {
        id,
        name,
        height,
        weight,
        stats,
        types
      }
    } = await axios.get(`${API_BASE}/pokemon/${pokemonId}`);
    const img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return {
      id,
      name,
      height,
      weight,
      stats,
      types,
      img
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { getPokemons, getPokemonDetails, API_BASE };