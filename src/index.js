import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './style.css';

function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num
  }
}

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const store = createStore(reducer);

const el = <Provider store={store}>
    <Counter/>
  </Provider>; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);