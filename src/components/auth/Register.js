import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registeruser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Register extends Component {
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
    this.props.registeruser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your Authors Heaven account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.username
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
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

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propType = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
