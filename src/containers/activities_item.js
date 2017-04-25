import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delActivity } from '../actions/index';

class ActivitiesItem extends Component {
  delActivity() {
    this.props.delActivity(this.props.activity.id);
  }  

  render() {
    return (
      <li className="list-group-item">
        { this.props.activity.desc }
        <button onClick={this.delActivity.bind(this)} type="button" className="close pull-xs-right">
          <span>&times;</span>
        </button>
      </li>
    );
  }
}

export default connect(null, { delActivity })(ActivitiesItem);