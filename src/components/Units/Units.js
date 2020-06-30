import React from 'react';

import './Units.css';
// import Unit from './Unit/Unit';
import { UNITS } from '../../assets/Units';

const Units = (props) => {
  return (
    <div className="Units">
      <div className="Human">
        <h2>Human</h2>
        <ul>
        {UNITS.map(unit => <li>{unit.title}</li>)}
          {/* <li>Peasant</li>
          <li>Footman</li>
          <li>Knight</li>
          <li>Rifleman</li>
          <li>Motar Team</li>
          <li>Gyrocopter</li>
          <li>Flying Machine</li>
          <li>Gryphon Rider</li>
          <li>Priest</li>
          <li>Sorceress</li>
          <li>Siege Engine</li>
          <li>Spellbreaker</li>
          <li>Dragonhawk</li> */}
        </ul>
      </div>

      <div className="Orc">
        <h2>Orc</h2>
      </div>

      <div className="Night-Elf">
        <h2>Night Elf</h2>
      </div>

      <div className="Undead">
        <h2>Undead</h2>
      </div>
    </div>
  );
};

export default Units;