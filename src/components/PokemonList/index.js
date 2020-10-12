import React from 'react';
import PokemonItem from '../PokemonItem';
import { connect } from 'react-redux';

const PokemonList = ({ pokemons, list }) => (
  <div className="pokemons-list">
    { list && list.length
      ? list.map(pokemon => {

        return <PokemonItem
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
          />
      })
      : 'No pokemons captured :('
    }
  </div>
);

export default connect(null)(PokemonList);
