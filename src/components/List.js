import React, { Component } from 'react';
import Word from './Word';

const words = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { words };
        this.getWordItem = this.getWordItem.bind(this);
    }

    removeWord(id) {
        const words = this.state.words.filter(w => w.id !== id);
        this.setState({ words });
    }

    getWordItem(word) {
        return (
            <div className="word" key={word.id}>
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    { word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => this.removeWord(word.id)}
                >
                    Remove
                </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                { this.state.words.map(word => this.getWordItem(word)) }
            </div>
        );
    }
}
