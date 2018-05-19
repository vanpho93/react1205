import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        return (
            <div>
                <h3>Value = 0</h3>
                <button className="btn btn-success" onClick={() => console.log(123)}>
                    Increase
                </button>
                <button className="btn btn-danger">Descrease</button>
                <button className="btn btn-warning">Reset</button>
            </div>
        );
    }
}
