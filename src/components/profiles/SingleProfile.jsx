import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/FollowsActions';

export class SingleProfile extends Component {
  constructor(props) {
    super(props);
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  followUser() {
    this.props.followUser(this.props.name);
  }

  unfollowUser() {
    this.props.unfollowUser(this.props.name);
  }

  render() {
    return (
      <section id="dashboard-page" className="flex-grow-1">
        <section id="profile" className="mt-5 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <h4 className="display-4">{this.props.name}</h4>
                <div className="d-flex flex-row">
                  <div className="col-md-8">
                    <p className="lead">About: {this.props.about}</p>
                    <p className="lead">Fun Fact: {this.props.funFact}</p>
                    <p>
                      <span>
                        <Link
                          to={'/' + this.props.name + '/followings'}
                          className="text-sm mr-3 text-muted"
                        >
                          <i className="fas fa-users" /> Following
                        </Link>
                      </span>
                      <span>
                        <Link
                          to={'/' + this.props.name + '/followers'}
                          className="text-sm text-muted"
                        >
                          <i className="fas fa-users" /> Followers
                        </Link>
                      </span>
                    </p>
                    {this.props.isFollowing ? (
                      <button
                        onClick={this.unfollowUser}
                        className="btn-sm btn-outline-primary"
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={this.followUser}
                        className="btn-primary btn-sm"
                      >
                        Follow
                      </button>
                    )}
                  </div>
                  <div className="col-md-2 margin-top">
                    {this.props.image ? (
                      <img
                        className="img-thumbnail rounded-circle"
                        src={this.props.image}
                        alt=""
                      />
                    ) : (
                      <i className="far fa-user-circle fa-8x" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default connect(
  null,
  { followUser, unfollowUser }
)(SingleProfile);
