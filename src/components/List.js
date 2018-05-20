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
        this.state = { words, txtEn: '', txtVn: '', shouldShowForm: false, filterMode: 'SHOW_ALL' };
        this.onAddWord = this.onAddWord.bind(this);
        this.onToggleForm = this.onToggleForm.bind(this);
        this.onRemoveWord = this.onRemoveWord.bind(this);
        this.onToggleWord = this.onToggleWord.bind(this);
        this.onChangeFilterMode = this.onChangeFilterMode.bind(this);
    }

    onRemoveWord(id) {
        const words = this.state.words.filter(w => w.id !== id);
        this.setState({ words });
    } 
    
    onToggleWord(id) {
        const words = this.state.words.map(w => {
            if (w.id !== id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
        this.setState({ words });
    }

    onAddWord(word) {
        const { words } = this.state;
        const newWords = words.concat(word);
        this.setState({ words: newWords, shouldShowForm: false });
    }

    onToggleForm() {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    }

    onChangeFilterMode(filterMode) {
        this.setState({ filterMode });
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
                <Form
                    shouldShowForm={shouldShowForm}
                    onToggleForm={this.onToggleForm}
                    onAddWord={this.onAddWord}
                />
                <Filter
                    filterMode={filterMode}
                    onChangeFilterMode={this.onChangeFilterMode}
                />
                {this.filteredWords.map(word => (
                    <Word
                        key={word.id}
                        word={word}
                        onRemoveWord={this.onRemoveWord}
                        onToggleWord={this.onToggleWord}
                    />
                ))}
            </div>
        );
    }
}
