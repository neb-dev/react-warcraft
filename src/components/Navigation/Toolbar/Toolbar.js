import React from 'react';

import './Toolbar.css';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
  <div className="Toolbar">
    <div>MENU</div>
    <div>LOGO</div>
    <nav className="Desktop">
      <NavItems />
    </nav>
  </div>
);

export default toolbar;