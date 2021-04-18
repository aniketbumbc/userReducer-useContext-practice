import React, { useContext } from 'react';
import { CountContext } from '../App';
function CComponent() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h4>Component C {countContext.countState}</h4>
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>
        Reset Count
      </button>
    </div>
  );
}

export default CComponent;
