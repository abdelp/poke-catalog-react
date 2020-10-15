import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PokemonAbilities = ({ abilities }) => (
  <div className="abilities-container">
    {abilities.map(ability => (
      <div
        key={ability.ability.name}
        className={cx('pokemon-ability', ability.ability.name)}
      >
        {ability.ability.name}
      </div>
    ))}
  </div>
);

PokemonAbilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object),
};

PokemonAbilities.defaultProps = {
  abilities: [],
};

export default PokemonAbilities;
