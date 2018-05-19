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
        this.state = { words, txtEn: '', txtVn: '' };
        this.getWordItem = this.getWordItem.bind(this);
        this.addWord = this.addWord.bind(this);
    }

    removeWord(id) {
        const words = this.state.words.filter(w => w.id !== id);
        this.setState({ words });
    } 
    
    toggleWord(id) {
        const words = this.state.words.map(w => {
            if (w.id !== id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
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
                <button
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
                    onClick={() => this.toggleWord(word.id)}
                >
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

    addWord() {
        const { words, txtEn, txtVn } = this.state;
        const word = {
            id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        const newWords = words.concat(word);
        this.setState({ words: newWords, txtEn: '', txtVn: '' });
    }

    render() {
        const { words, txtEn, txtVn } = this.state;
        return (
            <div className="App">
                <div className="form-group" className="word-form">
                    <input
                        placeholder="English"
                        className="form-control"
                        value={txtEn}
                        onChange={evt => this.setState({ txtEn: evt.target.value })}
                    />
                    <br />
                    <input
                        placeholder="Vietnamese"
                        className="form-control"
                        value={txtVn}
                        onChange={evt => this.setState({ txtVn: evt.target.value })}
                    />
                    <br />
                    <div className="btn-container">
                        <button className="btn btn-success" onClick={this.addWord}>
                            Add word
                        </button>
                        <button
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                { words.map(word => this.getWordItem(word)) }
            </div>
        );
    }
}
