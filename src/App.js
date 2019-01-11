import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import NavView from './views/NavView';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Authors Haven - Zeus Team</h1>
        <BrowserRouter>
          <div>
            <NavView />
            <Switch>
              <Route path="/" component={HomeView} exact />
              <Route path="/login" component={LoginView} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
