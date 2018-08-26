import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import _Container from '../Container';

const Container = styled(_Container)`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isEdit } = this.props;
    return (
      <Container>
        <h1>{isEdit ? 'Edit account' : 'Add account'}</h1>
        <form>
          <Input label="Account name" placeholder="Account name" />
          <Input label="Type" placeholder="Type" />
          <Input label="Bank" placeholder="Bank" />
          <Button primary fullWidth>
            Add account
          </Button>
        </form>
      </Container>
    );
  }
}

AccountForm.defaultProps = {
  isEdit: false,
};
AccountForm.propTypes = {
  isEdit: PropTypes.bool,
};

export default AccountForm;
