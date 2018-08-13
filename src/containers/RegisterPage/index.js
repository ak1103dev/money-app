import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
        <Container>
          <h1>Join Moneyport</h1>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" placeholder="Add a username" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" placeholder="name@example.com" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Add a password"
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Signup for Moneyport
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

RegisterPage.propTypes = {};

export default RegisterPage;
