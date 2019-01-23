import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinksPopup from './LinksPopup';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';
import SearchForm from '../search/SearchForm';

export class LoggedInNavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 fixed-top">
          <div className="container">
            <Link to="#" className="navbar-brand">
              Authors Haven
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <SearchForm />
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-search" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="far fa-bell" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/articles" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article/post" className="nav-link">
                    <i className="fas fa-plus" />
                    New Article
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-trigger="focus"
                  >
                    <i className="far fa-user-circle fa-2x" />
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-secondary"
                    onClick={() => {
                      this.props.logoutUser();
                      this.props.history.push('/');
                    }}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <LinksPopup />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { logoutUser }
)(withRouter(LoggedInNavBar));
