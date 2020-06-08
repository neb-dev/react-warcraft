import React /*, { useState } */ from 'react';

import './Ladder.css';
import Player from './Player/Player';
import { PLAYERS } from '../../assets/Players';

const Ladder = (props) => {
  // let [players, setPlayers] = useState([]);

  const playerList = PLAYERS.map(player => <Player player={player} />);

  return (
    <div className="Ladder">
      <h1 className="Heading">Ladder</h1>
      { playerList }
    </div>
  );
};

export default Ladder;