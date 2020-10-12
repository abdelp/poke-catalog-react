import React from 'react';
import cx from 'classnames';

const PokemonTypes = ({ types }) => (
  <>
    {types.map(type =>
      <div
        key={type.type.name}
        className={cx('pokemon-type', type.type.name)}
      >
        {type.type.name}
      </div>)}
  </>
);

export default PokemonTypes;
