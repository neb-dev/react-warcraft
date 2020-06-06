import React from 'react';

import './Player.css';
import PropTypes from 'prop-types';

const player = (props) => {
    let player = props.player;
    return (
        <div className="Player">
            <p>{ player.name }</p>
            <p>{ player.race }</p>
            <p>{ player.wins }</p>
            <p>{ player.losses }</p>
        </div>
    );
};

player.propTypes = {
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired
};

export default player;