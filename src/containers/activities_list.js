import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../actions/index';
import ActivitiesItem from './activities_item';

class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = { addActivity: '' };
  }

  onAddActivityChange(e) {
    this.setState({ addActivity: e.target.value });
  }

  onAddActivity(e) {
    e.preventDefault();
    if (/\S/.test(this.state.addActivity)) {
      this.props.addActivity(this.state.addActivity.trim());
      this.setState({ addActivity: '' });
    }
  }

  render() {
    return (
      <div>
      <h3>Leadership Activities</h3>
      <p>A leadership activity is worth 2 points.</p>
      <form onSubmit={this.onAddActivity.bind(this)}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={this.state.addActivity}
            onChange={this.onAddActivityChange.bind(this)}
            placeholder="Add a leadership activity" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>              
        </div>
      </form>
      <ul className="list-group">        
        { this.props.activities.map((activity) => <ActivitiesItem key={activity.id} activity={activity} />) }
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.leadership.activities
  };
};

export default connect(mapStateToProps, { addActivity })(ActivitiesList);