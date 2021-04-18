import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      console.log('re');
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset Count</button>
    </div>
  );
}

export default Counter1;
