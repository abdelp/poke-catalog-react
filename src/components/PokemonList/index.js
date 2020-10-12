import React from 'react';
import { useHistory } from 'react-router-dom';
import Pokemon from '../Pokemon';
import { connect } from 'react-redux';
import { getPokemonsByVisibilityFilter } from '../../redux/selectors';


const PokemonList = ({ pokemons }) => (
  <div className="pokemons-list">
    { pokemons && pokemons.length
      ? pokemons.map(pokemon => {

        return <Pokemon
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
          />
      })
      : 'No pokemons captured :('
    }
  </div>
);

const mapStateToProps = state => {
  const { pokemons } = state.data; //getPokemonsByVisibilityFilter(state, visibilityFilter);

  return { pokemons };
};

export default connect(mapStateToProps)(PokemonList);
