import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import * as actionCreators from '../redux/actionCreators';

class List extends Component {
    componentDidMount() {
        this.props.getAllWords();
    }

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
                            key={word._id}
                            word={word}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapState = state => ({words: state.words, filterMode: state.filterMode })

export default connect(mapState, actionCreators)(List);
