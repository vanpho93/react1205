import React, { Component } from 'react';
import Word from './components/Word';
import './App.css';

const words = [
  { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
  { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
  { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        { words.map(word => <Word wordInfo={word} />) }
        {/* <Loop /> */}
      </div>
    );
  }
}

export default App;
