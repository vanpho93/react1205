import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';


class List extends Component {
    get filteredWords() {
        const { words, filterMode } = this.props;
        return words.filter(w => {
            if (filterMode === 'SHOW_FORGOT' && w.isMemorized) return false; 
            if (filterMode === 'SHOW_MEMORIZED' && !w.isMemorized) return false;
            return true;
        });
    }

    render() {
        return (
            <div>
                <Form />
                <Filter />
                {
                    this.filteredWords.map(word => (
                        <Word
                            key={word.id}
                            word={word}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapState = state => ({words: state.words, filterMode: state.filterMode })

export default connect(mapState)(List);
