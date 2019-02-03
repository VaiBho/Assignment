import React, { Component } from 'react';
import FlightSearch from './components/FlightSearch';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FlightSearch />
      </div>
    );
  }
}

export default App;
