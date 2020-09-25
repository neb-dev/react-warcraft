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
        {UNITS.filter(unit => unit.race === 'Human').map(unit => <li>{unit.title}</li>)}
        </ul>
      </div>

      <div className="Orc">
        <h2>Orc</h2>
        <ul>
        {UNITS.filter(unit => unit.race === 'Orc').map(unit => <li>{unit.title}</li>)}
        </ul>
      </div>

      <div className="Night-Elf">
        <h2>Night Elf</h2>
        <ul>
        {UNITS.filter(unit => unit.race === 'Night Elf').map(unit => <li>{unit.title}</li>)}
        </ul>
      </div>

      <div className="Undead">
        <h2>Undead</h2>
        <ul>
        {UNITS.filter(unit => unit.race === 'Undead').map(unit => <li>{unit.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Units;