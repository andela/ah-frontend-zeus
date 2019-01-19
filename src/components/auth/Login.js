import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
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
              <form action="dashboard.html">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
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
                <Link to="/#dashboard" className="btn btn-outline-primary mr-1">
                  Sign in with Google
                </Link>
                <Link to="/#dashboard" className="btn btn-outline-primary mr-1">
                  Sign in with Facebook
                </Link>
                <Link to="/#dashboard" className="btn btn-outline-primary">
                  Sign in with Twitter
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

export default Login;
