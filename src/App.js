import React, { Component } from 'react';
// import List from './components/List';
import Parent from './components/Parent';
import './App.css';

import { createStore } from 'redux';

const store = createStore((state = { count: 1 }, action) => {
  if (action.type === 'INCREASE') return { count: state.count + 1 };
  if (action.type === 'DESCREASE') return { count: state.count - 1 };
  if (action.type === 'RESET') return { count: 1 };
  return state;
});

console.log(store.getState());
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
console.log(store.getState());
store.dispatch({ type: 'DESCREASE' });
console.log(store.getState());
store.dispatch({ type: 'RESET' });
console.log(store.getState());

class App extends Component {
  render() {
    return <Parent />;
  }
}

export default App;

// dinh nghia ra store √
// ket noi store voi components √
// hien thi du lieu tu store ra components
// thay doi du lieu store tu components
