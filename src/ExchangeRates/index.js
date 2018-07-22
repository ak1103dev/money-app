import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = ({ currency }) => (
  <Query
    query={gql`
      {
        rates(currency: "${currency}") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${rate} ${currency}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;
