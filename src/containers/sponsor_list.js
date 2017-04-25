import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSponsor } from '../actions/index';
import SponsorItem from './sponsor_item';

class SponsorList extends Component {
  constructor(props) {
    super(props);
    this.state = { addSponsor: '' };
  }

  onAddSponsorChange(e) {
    this.setState({ addSponsor: e.target.value });
  }

  onAddSponsor(e) {
    e.preventDefault();
    this.props.addSponsor(this.state.addSponsor);
    this.setState({ addSponsor: '' });
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <form onSubmit={this.onAddSponsor.bind(this)}>
            <div className="input-group">
              <input className="form-control" type="text" value={this.state.addSponsor} onChange={this.onAddSponsorChange.bind(this)} />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">Add</button>
              </span>
              
            </div>
          </form>
        </li>
        { this.props.sponsors.map((sponsor) => <SponsorItem key={sponsor.id} sponsor={sponsor} />) }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.leadership.sponsors
  };
};

export default connect(mapStateToProps, { addSponsor })(SponsorList);