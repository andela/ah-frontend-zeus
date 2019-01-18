import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { withRouter, Link } from 'react-router-dom';
import Google from '../auth/Google';
import Facebook from '../auth/Facebook';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
    /**
     * binds this operator to onchange and onSubmit.
     */
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section id="register" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center">Join Authors Haven</h3>
              <p className="lead text-center">
                Create an account to personalize your homepage, follow your
                favorite authors and publications, applaud stories you love, and
                more.
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.username
                    })}
                    placeholder="Username"
                    name="name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.Email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.Email && (
                    <div className="invalid-feedback">{errors.Email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 zeus-color"
                />
              </form>
              <div className="mt-4 text-center">
                <p className="lead">
                  Or, you can sign up using your favorite social media account
                </p>
                <Link to="#" className="btn btn-outline-primary mr-1">
                  <Google/>
                </Link>
                <Link to="#" className="btn btn-outline-primary mr-1">
                  <Facebook/>
                </Link>
              </div>
              <div className="mt-4 text-right">
                <p className="lead">
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Register.propType = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
