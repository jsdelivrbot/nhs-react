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
    if (/\S/.test(this.state.addSponsor)) {
      this.props.addSponsor(this.state.addSponsor.trim());
      this.setState({ addSponsor: '' });
    }
  }

  render() {
    return (
      <div>
      <h3>Faculty Sponsors</h3>
      <p>A faculty sponsor can be a teacher, coach, administrator, or advisor.</p>
      <form onSubmit={this.onAddSponsor.bind(this)}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={this.state.addSponsor}
            onChange={this.onAddSponsorChange.bind(this)}
            placeholder="Add a faculty sponsor" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>              
        </div>
      </form>
      <ul className="list-group">        
        { this.props.sponsors.map((sponsor) => <SponsorItem key={sponsor.id} sponsor={sponsor} />) }
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.leadership.sponsors
  };
};

export default connect(mapStateToProps, { addSponsor })(SponsorList);