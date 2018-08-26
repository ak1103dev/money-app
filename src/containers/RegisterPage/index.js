import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Signup -- Moneyport</title>
          <meta name="description" content="create your account" />
        </Helmet>
      </div>
    );
  }
}

RegisterPage.propTypes = {};

export default RegisterPage;
