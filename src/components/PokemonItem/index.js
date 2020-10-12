import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonTypes from '../PokemonTypes';

const PokemonItem = ({ pokemon }) => {
  const {
    id, img, name, number, types,
  } = pokemon;
  return (
    <Link to={{
      pathname: `/pokemon-details/${id}`,
      state: { pokemon },
    }}
    >
      <div className="pokemon-card">
        <header className="card-header">
          <img src={img} alt={name} />
        </header>
        <main className="card-body">
          <h6>
            #
            {number}
          </h6>
          <h2>{name}</h2>
        </main>
        <footer className="card-footer">
          <PokemonTypes types={types} />
        </footer>
      </div>
    </Link>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

// PokemonTypes.defaultProps = {
//   pokemon: {
//     id: null,
//     img: null,
//     name: null,
//     number: null,
//     types: null,
//   },
// };

export default PokemonItem;
