import React, { Component } from 'react';
import ExchangeRates from './ExchangeRates';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    currency: 'USD'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ textAlign: 'right' }}>
          <div style={{ textAlign: 'right' }}>
            <span>1 </span>
            <select value={this.state.currency} onChange={(event) => this.setState({ currency: event.target.value })}>
              <option value="USD">USD</option>
              <option value="THB">THB</option>
              <option value="BTC">BTC</option>
            </select>
          </div>
          <div>Rates</div>
          <ExchangeRates currency={this.state.currency} />
        </div>
      </div>
    );
  }
}

export default App;
