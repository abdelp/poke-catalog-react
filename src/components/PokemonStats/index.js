import React from 'react';
import StatBar from '../StatBar';

const PokemonStats = () => (
  <div className='pokemon-stats'>
    <div>
      <StatBar />
      <p><strong>HP</strong></p>
    </div>
    <div>
      <StatBar />
      <p><strong>Attack</strong></p>
    </div>
    <div>
      <StatBar />
      <p><strong>Defense</strong></p>
    </div>
    <div>
      <StatBar />
      <p><strong>Special<br/>Attack</strong></p>
    </div>
    <div>
      <StatBar />
      <p>
        <strong>
        Special<br/>
        Defense
        </strong>
      </p>
    </div>
    <div>
      <StatBar />
      <p><strong>Speed</strong></p>
    </div>
  </div>
);

export default PokemonStats;
