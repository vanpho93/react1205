import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>Value = {value}</h3>
                <button
                    className="btn btn-success"
                    onClick={() => this.setState({ value: value + 1 })}
                >
                    Increase
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => this.setState({ value: value - 1 })}
                >
                    Descrease
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => this.setState({ value: 0 })}
                >
                    Reset
                </button>
            </div>
        );
    }
}
