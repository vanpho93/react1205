import React, { Component } from 'react';

export default class Filter  extends Component {
    render() {
        const { onChangeFilterMode } = this.props;
        return (
            <select
                className="form-control"
                style={{ width: 200, margin: 10 }}
                value={this.props.filterMode}
                onChange={evt => onChangeFilterMode(evt.target.value)}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}