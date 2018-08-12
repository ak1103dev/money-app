import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import AdminLayout from '../AdminLayout';
import NotFoundPage from '../NotFoundPage';
import DashboardLayout from '../DashboardLayout';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={DashboardLayout} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
