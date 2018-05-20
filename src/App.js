import React, { Component } from 'react';
// import List from './components/List';
import Parent from './components/Parent';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore((state = { count: 10 }, action) => {
  if (action.type === 'INCREASE') return { count: state.count + 1 };
  if (action.type === 'DESCREASE') return { count: state.count - 1 };
  if (action.type === 'RESET') return { count: 1 };
  return state;
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Parent />
      </Provider>
    );
  }
}

export default App;

// dinh nghia ra store √
// ket noi store voi components √
// hien thi du lieu tu store ra components √
// thay doi du lieu store tu components
