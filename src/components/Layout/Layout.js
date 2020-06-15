import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import logo from '../../assets/wc3_logo.png';
import './Layout.css';

const layout = (props) => (
  <Auxiliary>
    <div className="Layout">
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