import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../redux/actionCreators';

class Word extends Component {
    render() {
        const { word, removeWord, toggleWord } = this.props;
        return (
            <div className="word">
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    { word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
                    onClick={() => toggleWord(word._id, !word.isMemorized)}
                >
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => removeWord(word._id)}
                >
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

export default connect(null, actionCreators)(Word);

// Cai postman
// dang ky mlab.com
