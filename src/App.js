import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passwordreset" component={PasswordReset} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
