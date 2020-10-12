import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import PokemonList from '../PokemonList';
import { getPokemons } from '../../APIs/pokemons';
import { getPokemonsByVisibilityFilter } from '../../redux/selectors';
import { AddPokemons } from '../../redux/actions';

const HomePage = ({ pokemons, AddPokemons }) => {
  const handleFetchPokemons = async () => {
    try {
      const result = await getPokemons();
      AddPokemons(result);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    handleFetchPokemons();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
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

export default connect(
  mapStateToProps,
  { AddPokemons },
)(HomePage);
