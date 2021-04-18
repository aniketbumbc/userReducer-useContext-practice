import React, { useContext } from 'react';
import { CountContext } from '../App';

function EComponenet() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h4> Componet E </h4>
      <h5>{countContext.countState}</h5>
    </div>
  );
}

export default EComponenet;
