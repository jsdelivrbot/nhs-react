import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInSchool } from '../actions/index';
import InSchoolItem from './inSchool_item';

class InSchoolList extends Component {
  constructor(props) {
    super(props);
    this.state = { addInSchool: '', addHours: 0 };
  }

  onAddInSchoolChange(e) {
    this.setState({ addInSchool: e.target.value });
  }

  onAddHoursChange(e) {
    this.setState({ addHours: e.target.value });
  }

  onAddInSchool(e) {
    e.preventDefault();
    if (/\S/.test(this.state.addInSchool) && this.state.addHours > 0) {
      this.props.addInSchool(this.state.addHours, this.state.addInSchool.trim());
      this.setState({ addInSchool: '', addHours: 0 });
    }
  }

  render() {
    return (
      <div>
      <h3>In-School Hours</h3>
      <p>You need a minimum of 15.</p>
      <form onSubmit={this.onAddInSchool.bind(this)}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={this.state.addInSchool}
            onChange={this.onAddInSchoolChange.bind(this)}
            placeholder="Add in-school service hours" />
          <input
            className="form-control"
            type="number"
            value={this.state.addHours}
            onChange={this.onAddHoursChange.bind(this)} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Add</button>
          </span>              
        </div>
      </form>
      <ul className="list-group">        
        { this.props.activities.map((activity) => <InSchoolItem key={activity.id} activity={activity} />) }
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activities: state.service.inSchool
  };
};

export default connect(mapStateToProps, { addInSchool })(InSchoolList);