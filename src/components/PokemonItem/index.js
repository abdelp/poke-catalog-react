import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonTypes from '../PokemonTypes';

const PokemonItem = ({ pokemon }) => (
  <Link to={{
    pathname: `/pokemon-details/${pokemon.id}`,
    state: { pokemon }
  }}
  >
    <div className='pokemon-card'>
      <header className="card-header">
        <img src={pokemon.img} alt={pokemon.name} />
      </header>
      <main className="card-body">
        <h6>#{pokemon.number}</h6>
        <h2>{pokemon.name}</h2>
      </main>
      <footer className="card-footer">
        <PokemonTypes types={pokemon.types} />
      </footer>
    </div>
  </Link>
);

export default connect(
  null
)(PokemonItem);