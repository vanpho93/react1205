import React, { Component } from 'react';
import Word from './Word';

const words = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

export default class List extends Component {
    render() {
        return (
            <div className="App">
                { words.map(word => <Word wordInfo={word} key={word.id} />) }
            </div>
        );
    }
}
