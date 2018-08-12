import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardPage from '../DashboardPage';
import HomePage from '../HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
