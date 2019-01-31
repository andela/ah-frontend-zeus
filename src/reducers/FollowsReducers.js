import {
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  GET_FOLLOWS_REQUEST,
  GET_FOLLOWS_SUCCESS,
  GET_FOLLOWS_FAILURE,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
  SIGNOUT,
  LOGIN_SUCCESS
} from '../constants/ActionTypes';

export function isRequesting(state, action) {
  switch (action.type) {
    case GET_PROFILES_REQUEST:
    case FOLLOW_REQUEST:
    case UNFOLLOW_REQUEST:
    case GET_FOLLOWS_REQUEST:
    case GET_FOLLOWERS_REQUEST:
      return true;
    default:
      return false;
  }
}

export function networkError(state, action) {
  switch (action.type) {
    case GET_PROFILES_FAILURE:
    case FOLLOW_FAILURE:
    case UNFOLLOW_FAILURE:
    case GET_FOLLOWS_FAILURE:
    case GET_FOLLOWERS_FAILURE:
      if (action.error === 'network') {
        return true;
      }
      return false;
    default:
      return false;
  }
}

export function fetchError(state, action) {
  switch (action.type) {
    case GET_PROFILES_FAILURE:
    case FOLLOW_FAILURE:
    case UNFOLLOW_FAILURE:
    case GET_FOLLOWS_FAILURE:
    case GET_FOLLOWERS_FAILURE:
      if (action.error !== 'network') {
        return action.message;
      }
      return '';
    default:
      return '';
  }
}

export function currentUser(
  state = {
    username: localStorage.getItem('username'),
    followings: [],
    followers: []
  },
  action
) {
  switch (action.type) {
    case GET_FOLLOWS_SUCCESS:
      if (action.user === 'current') {
        let currentUser = {};
        Object.assign(
          currentUser,
          { ...state },
          { followings: action.follows }
        );
        return currentUser;
      }
      return { ...state };
    case GET_FOLLOWERS_SUCCESS:
      if (action.user === 'current') {
        let currentUser = {};
        Object.assign(
          currentUser,
          { ...state },
          { followers: action.followers }
        );
        return currentUser;
      }
      return { ...state };
    case FOLLOW_SUCCESS:
      return Object.assign(
        {},
        { ...state },
        { followings: [...state.followings, action.followed] }
      );
    case UNFOLLOW_SUCCESS:
      return Object.assign(
        {},
        { ...state },
        {
          followings: state.followings.filter(
            following => following != action.unfollowed
          )
        }
      );
    case SIGNOUT:
      return Object.assign(
        {},
        { username: undefined, followings: [], followers: [] }
      );
    case LOGIN_SUCCESS:
      return Object.assign(
        {},
        { ...state },
        { username: localStorage.getItem('username') }
      );
    default:
      return { ...state };
  }
}

export function userWhoseFollowsInfoIsDisplayed(
  state = {
    username: '',
    followings: [],
    followers: []
  },
  action
) {
  switch (action.type) {
    case GET_FOLLOWS_SUCCESS:
      if (action.user !== 'current') {
        return Object.assign(
          {},
          { ...state },
          { followings: action.follows, username: action.user }
        );
      }
      return { ...state };
    case GET_FOLLOWERS_SUCCESS:
      if (action.user !== 'current') {
        return Object.assign(
          {},
          { ...state },
          { followers: action.followers, username: action.user }
        );
      }
      return { ...state };
    default:
      return { ...state };
  }
}

export function authors(state = [], action) {
  switch (action.type) {
    case GET_PROFILES_SUCCESS:
      return action.authors;
    default:
      return [...state];
  }
}
