import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class Filter  extends Component {
    render() {
        const { setFilterMode } = this.props;
        return (
            <select
                className="form-control"
                style={{ width: 200, margin: 10 }}
                value={this.props.filterMode}
                onChange={evt => setFilterMode(evt.target.value)}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}

const mapState = state => ({ filterMode: state.filterMode });
export default connect(mapState, actionCreators)(Filter);
