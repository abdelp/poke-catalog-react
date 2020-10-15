import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PokemonTypes = ({ types }) => (
  <div className="types-container">
    {types.map(type => (
      <div
        key={type.type.name}
        className={cx('pokemon-type', type.type.name)}
      >
        {type.type.name}
      </div>
    ))}
  </div>
);

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
};

PokemonTypes.defaultProps = {
  types: [],
};

export default PokemonTypes;
