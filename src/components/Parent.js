import React, { Component } from 'react';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <h3>Value = 0</h3>
                <Child />
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success">Increase</button>
                <button className="btn btn-danger">Descrease</button>
                <button className="btn btn-warning">Reset</button>
            </div>
        );
    }
}
