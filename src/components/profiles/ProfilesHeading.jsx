import React, { Component } from 'react';

class ProfilesHeading extends Component {
  render() {
    return (
      <section id="dashboard-page" className="flex-grow-1">
        <section id="profile" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <h2 className="display-2" style={{ textAlign: 'center' }}>
                  {this.props.heading}
                  <input
                    style={{ display: this.props.displayFilter ? 'block' : 'none' }}
                    onChange={this.props.handleChange}
                    name="display"
                    placeholder="Filter Users..."
                    id="filter-users"
                  />
                </h2>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ProfilesHeading;
