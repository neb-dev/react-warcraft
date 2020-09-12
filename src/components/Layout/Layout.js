import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import logo from '../../assets/wc3_logo.png';
import './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Auxiliary>
    <div className="Layout">
      <Toolbar />
      <header className="Layout-header">
        <img src={logo} className="Layout-logo" alt="logo" />
      </header>
      
      <main>
        { props.children }
      </main>
    </div>
  </Auxiliary>
);

export default layout;