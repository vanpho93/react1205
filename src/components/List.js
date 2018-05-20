import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

const words = [
    { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { words, txtEn: '', txtVn: '', shouldShowForm: true, filterMode: 'SHOW_ALL' };
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
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

    addWord() {
        const { words, txtEn, txtVn } = this.state;
        if (txtEn === '' || txtVn === '') return alert('Khong duoc de trong');
        const word = {
            id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        const newWords = words.concat(word);
        this.setState({ words: newWords, txtEn: '', txtVn: '', shouldShowForm: false });
    }

    toggleForm() {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    }

    get filteredWords() {
        const { words, filterMode } = this.state;
        return words.filter(w => {
            if (filterMode === 'SHOW_FORGOT' && w.isMemorized) return false; 
            if (filterMode === 'SHOW_MEMORIZED' && !w.isMemorized) return false;
            return true;
        });
    }

    render() {
        const { filterMode, shouldShowForm } = this.state;
        return (
            <div>
                <Form shouldShowForm={shouldShowForm} />
                <Filter filterMode={filterMode} />
                { this.filteredWords.map(word => <Word word={word} key={word.id} />) }
            </div>
        );
    }
}
