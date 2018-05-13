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
        const color = isMemorized ? 'green' : 'red';
        return (
            <div style={{ backgroundColor: '#D5D6D4', padding: '10px', margin: '10px', width: '200px', borderRadius: '5px' }}>
                <h3 style={{ color, margin: '10px' }}>{en}</h3>
                <p>{vn}</p>
                { this.getButton() }
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