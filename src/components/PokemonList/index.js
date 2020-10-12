import React from 'react';
import Pokemon from '../Pokemon';
import { connect } from 'react-redux';

const PokemonList = ({ pokemons, list }) => (
  <div className="pokemons-list">
    { list && list.length
      ? list.map(pokemon => {

        return <Pokemon
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
          />
      })
      : 'No pokemons captured :('
    }
  </div>
);

export default connect(null)(PokemonList);
