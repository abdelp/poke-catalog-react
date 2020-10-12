import React from 'react';
import PokemonItem from '../PokemonItem';

const PokemonList = ({ list }) => (
  <div className="pokemons-list">
    { list && list.length
      ? list.map(pokemon => (
        <PokemonItem
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
        />
      ))
      : 'No pokemons captured :('}
  </div>
);

export default PokemonList;
