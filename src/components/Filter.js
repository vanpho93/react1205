import React, { Component } from 'react';

export default class Filter  extends Component {
    render() {
        return (
            <select
                className="form-control"
                style={{ width: 200, margin: 10 }}
                value={this.props.filterMode}
                onChange={_ => _}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}