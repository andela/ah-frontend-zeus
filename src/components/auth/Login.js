import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/authActions';
import Google from '../auth/Google';
import Facebook from '../auth/Facebook'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      notFoundUser: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.email) {
        this.setState({ emailError: nextProps.errors.email });
      } else if (nextProps.errors.password) {
        this.setState({ passwordError: nextProps.errors.password });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      window.localStorage.setItem('token', loginUser.nextProps.user.token);
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { emailError, passwordError, notFoundUser } = this.state;
    return (
      <section id="login" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center">Welcome</h3>
              <p className="lead text-center">
                Sign in to access your personalized homepage, follow authors and
                topics you love, and clap for stories that matter to you.
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <span>{notFoundUser}</span>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 zeus-color"
                />
              </form>
              <div className="mt-2 text-right">
                <p className="lead">
                  <Link to="/passwordreset">Forgot Your Password?</Link>
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="lead">
                  Or, sign in using your favorite social media account
                </p>
                <Link to="#" className="btn btn-outline-primary mr-1">
                  <Google />
                </Link>
                <Link to="#" className="btn btn-outline-primary mr-1">
                  <Facebook />
                </Link>
              </div>
              <div className="mt-4 text-right">
                <p className="lead">
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
