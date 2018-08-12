import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const Admin = () => <div>Admin</div>;

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

AdminLayout.propTypes = {};

export default AdminLayout;
