import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../Container';
import Button from '../Button';
import Image from '../Image';

const Bg = styled.div`
  background-color: #ffbf00;
`;
const Justify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isAuth } = this.props;
    return (
      <Bg>
        <Container>
          <Justify>
            <Section>
              <Image
                alt="Mangkang"
                src="https://avatars1.githubusercontent.com/u/8772991?s=460&v=4"
                width={40}
                height={40}
              />
              <Name>Mangkang</Name>
            </Section>
            {isAuth ? (
              <Section>
                <Button secondary>Login</Button>
                <Button secondary>Signup</Button>
              </Section>
            ) : (
              <Section>
                <Button primary>Add account</Button>
                <Image
                  circle
                  alt="User"
                  src="https://avatars1.githubusercontent.com/u/8772991?s=460&v=4"
                  width={40}
                  height={40}
                />
              </Section>
            )}
          </Justify>
        </Container>
      </Bg>
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
