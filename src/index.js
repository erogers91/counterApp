import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './style.css';

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num };
}
function counterReducer(num) {
  return { type: 'REDUCE', num: num };
}

const initialState = {
  count: 0,
};
// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    case 'REDUCE':
      return { count: state.count - action.num}
    default:
      return state;
  }
}

function Counter(props) {
  function handleClick() {
    props.incrementCounter(1);
  }
  function removeClick() {
    if(props.count > 0)
    props.counterReducer(1);
  }
  
    return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
    <button onClick={removeClick}>Reduce</button>
    </div>;
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
const mapDispatchToProps = {
  incrementCounter,
  counterReducer
};

const store = createStore(reducer);

const CounterConnect = connect(mapStateToProps, mapDispatchToProps)(Counter);

const el = (
  <Provider store={store}>
    <CounterConnect />
  </Provider>
);


ReactDOM.render(el, document.getElementById('root'));
