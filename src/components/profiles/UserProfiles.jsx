import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserProfiles,
  getFollowsForCurrentUser,
  getFollowersForCurrentUser,
  getFollowsForAnyUser,
  getFollowersForAnyUser
} from '../../actions/FollowsActions';
import SingleProfile from './SingleProfile';
import ProfilesHeading from './ProfilesHeading';

export class UserProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ filter: e.target.value.toLowerCase() });
  }

  componentDidMount() {
    this.props.getUserProfiles();
    this.props.getFollowsForCurrentUser();
    this.props.getFollowersForCurrentUser();
    if (this.props.followsFor) {
      this.props.getFollowsForAnyUser(this.props.followsFor);
    } else if (this.props.followersFor) {
      this.props.getFollowersForAnyUser(this.props.followersFor);
    }
  }

  render() {
    let profiles;
    let heading;
    let displayFilter = false;
    if (this.props.followsFor === '_LoggedInUser_') {
      profiles = this.props.authors.filter(author =>
        this.props.follows.includes(author.username)
      );
      heading = profiles.length
        ? 'People you are following'
        : 'You are not following anyone';
    } else if (
      this.props.followsFor === this.props.userWhoseFollowsInfoIsDisplayed
    ) {
      profiles = this.props.authors.filter(author =>
        this.props.followsForAnyUser.includes(author.username)
      );
      heading = profiles.length
        ? 'People ' + this.props.followsFor + ' is following'
        : this.props.followsFor + ' is not following anyone';
    } else if (this.props.followersFor === '_LoggedInUser_') {
      profiles = this.props.authors.filter(author =>
        this.props.followers.includes(author.username)
      );
      heading = profiles.length
        ? 'People following you'
        : 'No one is following you';
    } else if (
      this.props.followersFor === this.props.userWhoseFollowsInfoIsDisplayed
    ) {
      profiles = this.props.authors.filter(author =>
        this.props.followersForAnyUser.includes(author.username)
      );
      heading = profiles.length
        ? 'People following ' + this.props.followersFor
        : 'No one is following ' + this.props.followersFor;
    } else {
      profiles = this.props.authors.filter(
        author => author.username != this.props.username
      );
      profiles = profiles.filter(author =>
        author.username.toLowerCase().startsWith(this.state.filter)
      );
      heading = 'User Profiles';
      displayFilter = true;
    }
    return (
      <React.Fragment>
        <ProfilesHeading
          heading={heading}
          displayFilter={displayFilter}
          handleChange={this.handleChange}
        />
        {profiles.map(author => {
          return (
            <SingleProfile
              key={author.email}
              name={author.username}
              about={author.profile.bio}
              funFact={author.profile['fun_fact']}
              image={author.profile.photo}
              isFollowing={this.props.follows.includes(author.username)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors,
    username: state.currentUser.username,
    follows: state.currentUser.followings,
    followers: state.currentUser.followers,
    userWhoseFollowsInfoIsDisplayed:
      state.userWhoseFollowsInfoIsDisplayed.username,
    followsForAnyUser: state.userWhoseFollowsInfoIsDisplayed.followings,
    followersForAnyUser: state.userWhoseFollowsInfoIsDisplayed.followers
  };
}

export default connect(
  mapStateToProps,
  {
    getUserProfiles,
    getFollowsForCurrentUser,
    getFollowersForCurrentUser,
    getFollowsForAnyUser,
    getFollowersForAnyUser
  }
)(UserProfiles);
