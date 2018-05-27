import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { addWord } = this.props;
        const { txtEn, txtVn } = this.state;
        addWord(txtEn, txtVn);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { txtEn, txtVn } = this.state;
        const { toggleForm } = this.props;
        if (!this.props.shouldShowForm) return (
            <button className="btn btn-success" style={{ margin: 10 }} onClick={toggleForm}>
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
                        onClick={toggleForm}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });
export default connect(mapState, actionCreators)(Form);
