import React, { Component } from 'react';
import classnames from 'classnames';
import { passwordReset } from '../../actions/authPasswordReset';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class PasswordReset extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const userEmail = {
      email: this.state.email
    };
    this.props.passwordReset(userEmail);
  }

  render() {
    const { errors } = this.state;

    return (
      <section id="passwordreset" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center my-4">
                Request a Password reset link
              </h3>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames(
                      'form-control form-control-lg',
                      {
                        'is-invalid':
                          errors.message &&
                          errors.message !==
                            'Check your email for the password reset link'
                      },
                      {
                        'is-valid':
                          errors.message &&
                          errors.message ===
                            'Check your email for the password reset link'
                      }
                    )}
                    placeholder="Enter Your Email Address"
                    name="email"
                    value={this.email}
                    onChange={this.onChange}
                  />
                </div>
                {errors.message !==
                  'Check your email for the password reset link' && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
                {errors.message ===
                  'Check your email for the password reset link' && (
                  <div className="valid-feedback">{errors.message}</div>
                )}
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 zeus-color"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PasswordReset.propType = {
  passwordReset: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { passwordReset }
)(withRouter(PasswordReset));
