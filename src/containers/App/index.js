import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

import AdminLayout from '../AdminLayout';
import DashboardLayout from '../DashboardLayout';

import NotFoundPage from '../NotFoundPage';

import NavBar from '../../components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <title>Moneyport</title>
            <meta
              name="description"
              content="The application report your money portfolio"
            />
          </Helmet>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={RegisterPage} />

            <Route path="/admin" component={AdminLayout} />
            <Route path="/" component={DashboardLayout} />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
