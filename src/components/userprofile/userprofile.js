import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../../actions/userprofile';

export class Userprofile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    let userInformation = (
      <section id="dashboard-page" className="flex-grow-1">
        <section id="profile" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <div className="d-flex flex-row">
                  <div className="col-md-2 margin-top">
                    <img
                      src={this.props.userprofile.photo}
                      alt="profile"
                      className=" img-thumbnail rounded-circle"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="col-md-8 margin-down">
                    <h4 className="display-5">
                      {localStorage.getItem('username')}
                      <Link
                        to="/editprofile"
                        className="text-sm btn btn-sm btn-outline-secondary ml-3"
                      >
                        <i className="far fa-edit" /> Edit Profile
                      </Link>
                    </h4>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="col-md-8">
                    <p className="lead">About : {this.props.userprofile.bio}</p>

                    <p className="lead">
                      Fun fact : {this.props.userprofile.fun_fact}
                    </p>
                    <p>
                      <span>
                        <a href="#" className="text-sm mr-3 text-muted">
                          <i className="fas fa-users" /> 67 Following
                        </a>
                      </span>
                      <span>
                        <a href="#" className="text-sm text-muted">
                          <i className="fas fa-users" /> 97 Followers
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-10 m-auto">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Recent Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="likes-tab"
                      data-toggle="tab"
                      href="#likes"
                      role="tab"
                      aria-controls="likes"
                      aria-selected="false"
                    >
                      Likes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="response-tab"
                      data-toggle="tab"
                      href="#response"
                      role="tab"
                      aria-controls="response"
                      aria-selected="false"
                    >
                      Responses
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h4 className="mt-3 display-5">Latest</h4>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Jan
                          21, 2019 • 5min
                        </h6>
                        <h5 className="card-title">
                          I Feel Like a Bad Person for Not Wanting Kids.
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Dec
                          16, 2018 • 2min
                        </h6>
                        <h5 className="card-title">
                          5 Most common Startup Mistakes
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="likes"
                    role="tabpanel"
                    aria-labelledby="likes-tab"
                  >
                    <h4 className="mt-3 display-5">Likes from John Doe</h4>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Jan 1,
                          2019 • 5min
                        </h6>
                        <h5 className="card-title">
                          This Year You Need To Focus On Short Term Goals.
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Dec
                          27, 2018 • 2min
                        </h6>
                        <h5 className="card-title">
                          3 Rules of an Unbreakable You.
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="response"
                    role="tabpanel"
                    aria-labelledby="response-tab"
                  >
                    <h4 className="mt-3 display-5">Responses</h4>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Jan 1,
                          2019 • 5min
                        </h6>
                        <h5 className="card-title">
                          This Year You Need To Focus On Short Term Goals.
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                          <i className="far fa-user-circle fa-2x mt-2" /> Dec
                          27, 2018 • 2min
                        </h6>
                        <h5 className="card-title">
                          3 Rules of an Unbreakable You.
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. In voluptates totam nihil deleniti sequi porro
                          quibusdam nemo, animi expedita pariatur.
                        </p>
                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
    localStorage.setItem('bio', this.props.userprofile.bio);
    localStorage.setItem('fun_fact', this.props.userprofile.fun_fact);
    localStorage.setItem('profile_pic', this.props.userprofile.photo);
    return <div>{userInformation}</div>;
  }
}

Userprofile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  userprof: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userprofile: state.userprofile.userprofile
  };
};
export default connect(
  mapStateToProps,
  { getProfile }
)(Userprofile);
