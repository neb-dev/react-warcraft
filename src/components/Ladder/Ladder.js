import React from 'react';

import './Ladder.css';
import Player from './Player/Player';

const ladder = (props) => {
  let player = {
    name: 'Neb',
    race: 'Orc',
    wins: 1,
    losses: 0
  }
  return (
    <div className="Ladder">
      <Player player={player} />
    </div>
  );
};

export default ladder;