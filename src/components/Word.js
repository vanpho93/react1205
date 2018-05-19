import React, { Component } from 'react';

class Word extends Component {
    getButton() {
        if (this.props.wordInfo.isMemorized) {
            return <button className="btn btn-danger">Forgot</button>;
        }
        return <button className="btn btn-success">Memorized</button>;
    }
    render() {
        const { en, vn, isMemorized } = this.props.wordInfo;
        return (
            <div className="word">
                <div className="word-container">
                <h3 className="text-success">{en}</h3>
                <h3 className="text-danger">
                    { isMemorized ? '----' : vn}
                </h3>
                </div>
                <div className="btn-container">
                { this.getButton() }
                <button className="btn btn-warning">
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

export default Word;

/*
    Auto Close Tag
    Auto Rename Tag
    npm Intellisense
    path Intellisense
    React-Native/React/Redux es6 (EQuimper)
*/