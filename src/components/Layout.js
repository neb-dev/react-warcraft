import React from 'react';
import Auxiliary from '../hoc/Auxiliary';

const layout = (props) => (
  <Auxiliary>
    <div>Navigation</div>
    <main>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;