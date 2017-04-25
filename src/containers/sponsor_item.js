import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delSponsor } from '../actions/index';

class SponsorItem extends Component {
  delSponsor() {
    this.props.delSponsor(this.props.sponsor.id);
  }  

  render() {
    return (
      <li className="list-group-item">
        { this.props.sponsor.desc }
        <button onClick={this.delSponsor.bind(this)} type="button" className="close pull-xs-right">
          <span>&times;</span>
        </button>
      </li>
    );
  }
}

export default connect(null, { delSponsor })(SponsorItem);