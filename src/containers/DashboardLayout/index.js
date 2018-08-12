import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import DashboardPage from '../DashboardPage';
import ProfilePage from '../ProfilePage';

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

DashboardLayout.propTypes = {};

export default DashboardLayout;
