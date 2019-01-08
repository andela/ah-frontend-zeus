import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Authors Haven!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
