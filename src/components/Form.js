import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const { onAddWord } = this.props;
        const word = {
            id: Date.now() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        onAddWord(word);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { txtEn, txtVn } = this.state;
        const { onToggleForm } = this.props;
        if (!this.props.shouldShowForm) return (
            <button className="btn btn-success" style={{ margin: 10 }} onClick={onToggleForm}>
                +
            </button>
        );
        return (
            <div className="form-group word-form">
                <input
                    placeholder="English"
                    className="form-control"
                    value={txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <div className="btn-container">
                    <button className="btn btn-success" onClick={this.addWord}>
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={onToggleForm}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}
