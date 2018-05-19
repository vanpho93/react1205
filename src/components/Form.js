import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: 'Five', txtVn: 'Nam' };
    }
    render() {
        return (
            <div className="form-group word-form">
                <input
                    placeholder="English"
                    className="form-control"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <div className="btn-container">
                    <button className="btn btn-success" onClick={this.addWord}>
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                    >
                        Cancel
                    </button>
                </div>
                { JSON.stringify(this.state) }
            </div>
        );
    }
}
