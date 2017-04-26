import React, { Component } from 'react';
import SponsorList from '../containers/sponsor_list';
import ActivitiesList from '../containers/activities_list';
import InSchoolList from '../containers/inSchool_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6"><ActivitiesList /></div>
        <div className="col-md-6"><SponsorList /></div>
        <div className="col-md-6"><InSchoolList /></div>
      </div>
    );
  }
}
