import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import commaize from '../../utils/commaize';

const Card = styled.div`
  background-color: ${({ color }) => color};
  color: white;
  min-width: 250px;
  border-radius: 3px;
  margin: 5px;
  padding: 10px;
`;
const Name = styled.div`
  font-weight: bold;
  margin-bottom: 50px;
  font-size: 18px;
`;
const Balance = styled.div`
  text-align: right;
  font-size: 14px;
`;

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, balance, color } = this.props;
    return (
      <Card color={color}>
        <Name>{name}</Name>
        <Balance>{commaize(balance, 2)} THB</Balance>
      </Card>
    );
  }
}

AccountCard.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default AccountCard;
