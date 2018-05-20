import React, { Component } from 'react';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        this.onIncrease = this.onIncrease.bind(this);
        this.onDescrease = this.onDescrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onIncrease() {
        this.setState({ count: this.state.count + 1 });
    }

    onDescrease() {
        this.setState({ count: this.state.count - 1 });
    }

    onReset() {
        this.setState({ count: 1 });
    }

    render() {
        return (
            <div>
                <h3>Value = {this.state.count}</h3>
                <Child
                    onIncrease={this.onIncrease}
                    onDescrease={this.onDescrease}
                    onReset={this.onReset}
                />
            </div>
        );
    }
}

class Child extends Component {
    render() {
        const { onIncrease, onDescrease, onReset } = this.props;
        return (
            <div>
                <button className="btn btn-success" onClick={onIncrease}>Increase</button>
                <button className="btn btn-danger" onClick={onDescrease}>Descrease</button>
                <button className="btn btn-warning" onClick={onReset}>Reset</button>
            </div>
        );
    }
}
