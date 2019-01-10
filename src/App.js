import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const hound = 'this const is not used';

class App extends Component {
  render() {
    console.log('hound fails');
    return (
      <div>
        <h1>Welcome to Authors Haven - Zeus Team 2</h1>
      </div>
    );
  }
}

export default hot(module)(App);
