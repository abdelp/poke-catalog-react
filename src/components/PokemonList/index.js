import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../PokemonItem';
import pokeball from '../../assets/svg/pokeball.svg';

const PokemonList = ({ list }) => (
  <div className="pokemons-list">
    { list && list.length
      ? list.map(pokemon => (
        <PokemonItem
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
        />
      ))
      : <img src={pokeball} className="loading-pokeball" alt="pokeball-icon" />}
  </div>
);

PokemonList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

PokemonList.defaultProps = {
  list: [],
};

export default PokemonList;
