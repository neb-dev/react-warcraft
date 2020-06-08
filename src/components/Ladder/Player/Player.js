import React from 'react';

import './Player.css';
import PropTypes from 'prop-types';

const Player = (props) => {
    let player = props.player;

    return (
        <div className="Player">
            <span className="Player-name">{ player.name }</span>
            <span className="Player-race">Race: { player.race }</span> 
            <span className="Player-wins">Wins: { player.wins }</span> 
            <span className="Player-losses">Losses: { player.losses }</span>
            <span className="Player-ratio">Ratio: { player.ratio }%</span>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired
};

export default Player;