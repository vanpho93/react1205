import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }
    render() {
        return (
            <div>
                <h3>Value = {this.state.count}</h3>
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
