import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccountCard from '../AccountCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-left: -5px;
  margin-right: -5px;
`;

class AccountGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { accounts } = this.props;
    return (
      <Grid>
        {accounts.map(account => (
          <AccountCard {...account} />
        ))}
      </Grid>
    );
  }
}

AccountGrid.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AccountGrid;
