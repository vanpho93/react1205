import React, { Component } from 'react';
import List from './components/List';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultWords = [
  { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
  { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
  { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

const defaultState = {
  words: defaultWords,
  shouldShowForm: false,
  filterMode: 'SHOW_ALL'
};

const store = createStore((state = defaultState, action) => {
  if (action.type === 'TOGGLE_FORM') return { ...state, shouldShowForm: !state.shouldShowForm };
  if (action.type === 'REMOVE_WORD') {
    const words = state.words.filter(w => w.id !== action.id);
    return { ...state, words };
  }
  if (action.type === 'TOGGLE_WORD') {
    const words = state.words.map(w => {
      if (w.id !== action.id) return w;
      return {...w, isMemorized: !w.isMemorized};
    });
    return { ...state, words };
  }
  if (action.type === 'ADD_WORD') {
    return { ...state, words: state.words.concat(action.word), shouldShowForm: false }
  }
  if (action.type === 'SET_FILTER_MODE') {
    return { ...state, filterMode: action.filterMode };
  }
  return state;
});

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
