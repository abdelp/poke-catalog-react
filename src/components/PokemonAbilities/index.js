import React from 'react';
import cx from 'classnames';

const PokemonAbilities = ({ abilities }) => (
  <>
    {abilities.map(ability =>
      <div
        key={ability.ability.name}
        className={cx('pokemon-type', ability.ability.name)}
      >
        {ability.ability.name}
      </div>)}
  </>
);

export default PokemonAbilities;
