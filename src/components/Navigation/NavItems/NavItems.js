import React from 'react';

import './NavItems.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
  <ul className="NavItems">
    <NavItem link="/">Ladder</NavItem>
    <NavItem link="/" active>Units</NavItem>
  </ul>
);

export default NavItems;