import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  background-color: #d3d3d3;
  border-radius: 3px;
  color: #444444;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  margin-right: 5px;
  :hover {
    cursor: pointer;
    background-color: #dcdcdc;
  }
  :focus {
    outline: 0 !important;
  }
  :active {
    border: 0 !important;
  }
`;
const PrimaryButton = styled(DefaultButton)`
  color: #ffffff;
  background-color: #ffbf00;
  border: 1px solid #ffbf00;
  :hover {
    background-color: #ffcf40;
  }
`;
const SecondaryButton = styled(DefaultButton)`
  color: #ffffff;
  background-color: #008000;
  border: 1px solid #008000;
  :hover {
    background-color: #228b22;
  }
`;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { primary, secondary, children, ...rest } = this.props;
    let MyButton = DefaultButton;
    if (primary) {
      MyButton = PrimaryButton;
    } else if (secondary) {
      MyButton = SecondaryButton;
    }
    return <MyButton {...rest}>{children}</MyButton>;
  }
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  children: '',
};
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
