import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delInSchool } from '../actions/index';

class InSchoolItem extends Component {
  h(n) {
    return n == 1 ? 'hour' : 'hours';
  }

  delInSchool() {
    this.props.delInSchool(this.props.activity.id);
  }

  render() {
    return (
      <li className="list-group-item">
        { this.props.activity.hours } { this.h.bind(this)(this.props.activity.hours) } - { this.props.activity.desc }
        <button onClick={this.delInSchool.bind(this)} type="button" className="close pull-xs-right">
          <span>&times;</span>
        </button>
      </li>
    );
  }
}

export default connect(null, { delInSchool })(InSchoolItem);