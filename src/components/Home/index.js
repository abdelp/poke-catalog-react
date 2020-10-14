import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';

import Filter from '../Filter';
import PokemonList from '../PokemonList';
import { getPokemons } from '../../APIs/pokemons';
import { getPokemonsByVisibilityFilter } from '../../redux/selectors';
import { AddPokemons, FetchInit, FetchFailure } from '../../redux/actions';

import pokeball from '../../assets/svg/pokeball.svg';

const HomePage = ({ pokemons, isLoading, isError, AddPokemons, FetchInit, FetchFailure }) => {
  const handleFetchPokemons = async () => {
    FetchInit();

    try {
      const result = await getPokemons();
      AddPokemons(result);
    } catch (e) {
      FetchFailure();
    }
  };

  useEffect(() => {
    handleFetchPokemons();
  }, []);

  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <Filter />

      {isError && <p className="error-msg">Something went wrong ...</p>}

      {isLoading ? (
        <div className="loader-container">
          <img src={pokeball} className="loading-pokeball" alt="pokeball-icon" />
        </div>
      ) : (
        <PokemonList list={pokemons} />
      )}

    </div>
  );
};

const mapStateToProps = state => {
  const { data: { isLoading, isError }, visibilityFilter } = state;
  const pokemons = sortBy(getPokemonsByVisibilityFilter(state, visibilityFilter), 'number');
  return { pokemons, isLoading, isError };
};

HomePage.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  AddPokemons: PropTypes.func.isRequired,
  FetchFailure: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  pokemons: [],
};

export default connect(
  mapStateToProps,
  { AddPokemons, FetchInit, FetchFailure },
)(HomePage);
