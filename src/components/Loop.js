import React, { Component } from 'react';

const subjects = ['React', 'Angular', 'VueJS'];

export default class Loop extends Component {
    render() {
        return (
            <div>
                <p>Loop Component</p>
                { subjects.map(subject => <p>{subject}</p>) }
            </div>
        );
    }
}
