import React from 'react';

import './Unit.css';

const Unit = (props) => {
  return (
    <div className="Unit">
      <div>{ props.title }</div>
      <div>{ props.hitPoints }</div>
      <div>{ props.gold }</div>
      <div>{ props.food }</div>
      <div>{ props.attack }</div>
      <div>{ props.race }</div>
    </div>
  );
};

export default Unit;