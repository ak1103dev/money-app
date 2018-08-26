import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import Button from '../Button';

const Justify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  background-color: black;
`;
const Name = styled.div``;
const Section = styled.div``;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isAuth } = this.props;
    return (
      <Container className="bg-primary">
        <Justify>
          <Section>
            <Logo />
            <Name>Wimangsa</Name>
          </Section>
          <Section>
            {isAuth ? (
              <div>
                <Button>Login</Button>
                <Button>Signup</Button>
              </div>
            ) : (
              <div>
                <Button>Add account</Button>
                <Logo />
              </div>
            )}
          </Section>
        </Justify>
      </Container>
    );
  }
}

NavBar.defaultProps = {
  isAuth: false,
};

NavBar.propTypes = {
  isAuth: PropTypes.bool,
};

export default NavBar;
