import React, { Component } from 'react';
import { Provider } from 'react-redux';

import List from './components/List';
import { store } from './redux/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

export default App;

// dinh nghia ra store √
// ket noi store voi components √
// hien thi du lieu tu store ra components √
// thay doi du lieu store tu components
