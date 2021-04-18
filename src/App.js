import React, { useReducer } from 'react';
import './App.css';
import AComponent from './componets/AComponent';
import BComponent from './componets/BComponent';
import CComponent from './componets/CComponent';

export const CountContext = React.createContext();

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
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className='App'>
        Count {count}
        <AComponent />
        <BComponent />
        <CComponent />
      </div>
    </CountContext.Provider>
  );
}

export default App;
