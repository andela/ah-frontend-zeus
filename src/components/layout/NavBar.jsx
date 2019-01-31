import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedOutNavBar from './LoggedOutNavBar';
import LoggedInNavBar from './LoggedInNavBar';

/**
 * Renders the navigation bar.
 */
export class NavBar extends Component {
  render() {
    return this.props.currentUser ? <LoggedInNavBar /> : <LoggedOutNavBar />;
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.username
  };
}

export default connect(
  mapStateToProps,
  null
)(NavBar);
