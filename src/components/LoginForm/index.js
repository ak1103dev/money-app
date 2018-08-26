import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../Image';
import Input from '../Input';
import Button from '../Button';
import _Container from '../Container';

const Container = styled(_Container)`
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const Center = styled.div`
  text-align: center;
`;

const image = 'https://avatars1.githubusercontent.com/u/8772991?s=460&v=4';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Center>
          <Image src={image} width={100} height={100} />
          <h1>Login to Mangkang</h1>
        </Center>
        <form>
          <Input label="Username or email" placeholder="Username or email" />
          <Input label="Password" type="password" placeholder="Password" />
          <Button primary fullWidth>
            Login
          </Button>
        </form>
      </Container>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;
