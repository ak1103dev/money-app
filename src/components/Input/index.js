import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  margin-bottom: 5px;
`;
const DefaultInput = styled.input`
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 5px;
  :focus {
    outline: none;
  }
`;
const Description = styled.div`
  color: gray;
  font-size: 14px;
  margin-bottom: 5px;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, description, errorMessage, ...rest } = this.props;
    return (
      <Group>
        {label && <Label>{label}</Label>}
        <DefaultInput {...rest} />
        {description && <Description>{description}</Description>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Group>
    );
  }
}

Input.defaultProps = {
  label: '',
  description: '',
  errorMessage: '',
};
Input.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
