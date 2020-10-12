import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes';
import PokemonAbilities from '../PokemonAbilities';
import PokemonStats from '../PokemonStats';
import DataBox from '../DataBox';

const PokemonDetailsPage = props => {
  const { location: { state: { pokemon } } } = props;
  const {
    name,
    number,
    img,
    stats,
    height,
    weight,
    types,
    abilities,
  } = pokemon;

  return (
    <>
      <h1 className="pokemon-name">
        {name}
        {' '}
        <span>
          #
          {number}
        </span>
      </h1>
      <div className="details-container">
        <div className="left-side">
          <div className="img-container">
            <img src={img} alt={name} />
          </div>
          <div className="stats-container">
            <PokemonStats stats={stats} />
          </div>
        </div>
        <div className="right-side">
          <DataBox height={height} weight={weight} />

          <h2>Type</h2>
          <PokemonTypes types={types} />

          <h2>Abilities</h2>
          <PokemonAbilities abilities={abilities} />
        </div>
      </div>
    </>
  );
};

PokemonDetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.object).isRequired,
        stats: PropTypes.arrayOf(PropTypes.object).isRequired,
        abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};

export default PokemonDetailsPage;
