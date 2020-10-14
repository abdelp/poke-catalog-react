import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter from '../Filter';
import PokemonList from '../PokemonList';
import { getPokemons } from '../../APIs/pokemons';
import { getPokemonsByVisibilityFilter } from '../../redux/selectors';
import { AddPokemons, FetchFailure } from '../../redux/actions';

const HomePage = ({ pokemons, AddPokemons, FetchFailure }) => {
  const handleFetchPokemons = async () => {
    try {
      const result = await getPokemons();
      AddPokemons(result);
    } catch (e) {
      FetchFailure();
    }
  };

  useEffect(() => {
    handleFetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className='title'>Pokedex</h1>
      <Filter />
      <PokemonList list={pokemons} />
    </div>
  );
};

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const pokemons = getPokemonsByVisibilityFilter(state, visibilityFilter);
  return { pokemons };
};

HomePage.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  AddPokemons: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  pokemons: [],
};

export default connect(
  mapStateToProps,
  { AddPokemons, FetchFailure },
)(HomePage);
