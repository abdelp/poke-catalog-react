import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../APIs/pokemons';
import PokemonTypes from '../PokemonTypes';
import PokemonAbilities from '../PokemonAbilities';
import PokemonStats from '../PokemonStats';
import DataBox from '../DataBox';

const PokemonDetailsPage = (props) => {
  const { location: { state: { pokemon } } } = props;

  console.log(props);

  return (
    <>
      <h1 className="pokemon-name">{pokemon.name} <span>#{pokemon.number}</span></h1>
      <div className="details-container">
        <div className="left-side">
          <div className="img-container">
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div className="stats-container">
            <PokemonStats stats={pokemon.stats} />
          </div>
        </div>
        <div className="right-side">
          <DataBox height={pokemon.height} weight={pokemon.weight} />

          <h2>Type</h2>
          <PokemonTypes types={pokemon.types} />

          <h2>Abilities</h2>
          <PokemonAbilities abilities={pokemon.abilities} />
        </div>
      </div>
    </>
  );
};

export default PokemonDetailsPage;
