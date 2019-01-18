import React, { Component } from 'react';

class PasswordReset extends Component {
  render() {
    return (
      <section id="passwordreset" className="flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center my-4">
                Request a Password reset link
              </h3>
              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Email Address"
                    name="email"
                  />
                </div>
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
export default PasswordReset;
