import store from '../store';
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
  GET_FOLLOWERS_FAILURE
} from '../constants/ActionTypes';

const token = localStorage.getItem('token');
const API_HOST_URL = process.env.API_URL;

export function getUserProfiles() {
  return function(dispatch) {
    dispatch({ type: GET_PROFILES_REQUEST });
    return fetch(`${API_HOST_URL}/authors/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch({
            type: GET_PROFILES_FAILURE,
            error: 'No data.',
            message:
              'Something wrong happened. Make sure your request token is well set.'
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({ type: GET_PROFILES_SUCCESS, authors: data.authors });
        }
      })
      .catch(error =>
        dispatch({ type: GET_PROFILES_FAILURE, error: 'network' })
      );
  };
}

export function followUser(username) {
  return function(dispatch) {
    dispatch({ type: FOLLOW_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${username}/follows/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 201) {
          dispatch({
            type: FOLLOW_FAILURE,
            error: 'Cannot follow.',
            message: `Failed to follow ${username}.`
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({ type: FOLLOW_SUCCESS, followed: username });
        }
      })
      .catch(error => dispatch({ type: FOLLOW_FAILURE, error: 'network' }));
  };
}

export function unfollowUser(username) {
  return function(dispatch) {
    dispatch({ type: UNFOLLOW_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${username}/follows/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 204) {
          dispatch({
            type: UNFOLLOW_FAILURE,
            error: 'Cannot unfollow.',
            message: `Failed to unfollow ${username}.`
          });
        } else {
          dispatch({ type: UNFOLLOW_SUCCESS, unfollowed: username });
        }
      })
      .then(data => {
        if (data) {
          dispatch({ type: UNFOLLOW_SUCCESS, unfollowed: username });
        }
      })
      .catch(error =>
        dispatch({
          type: UNFOLLOW_FAILURE,
          error: 'network',
          messae: error.toString()
        })
      );
  };
}

export function getFollowsForCurrentUser(user = undefined) {
  return function(dispatch) {
    const currentUser = store.getState().currentUser.username || user;
    dispatch({ type: GET_FOLLOWS_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${currentUser}/follows/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch({
            type: GET_FOLLOWS_FAILURE,
            error: 'Cannot GET.',
            message: 'Cannot get followings for the current user.'
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({
            type: GET_FOLLOWS_SUCCESS,
            user: 'current',
            follows: data.following
          });
        }
      })
      .catch(error =>
        dispatch({ type: GET_FOLLOWS_FAILURE, error: 'network' })
      );
  };
}

export function getFollowersForCurrentUser(user = undefined) {
  return function(dispatch) {
    const currentUser = store.getState().currentUser.username || user;
    dispatch({ type: GET_FOLLOWERS_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${currentUser}/followers/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch({
            type: GET_FOLLOWERS_FAILURE,
            error: 'Cannot GET.',
            message: 'Cannot get followers for the current user.'
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({
            type: GET_FOLLOWERS_SUCCESS,
            user: 'current',
            followers: data.followers
          });
        }
      })
      .catch(error =>
        dispatch({ type: GET_FOLLOWERS_FAILURE, error: 'network' })
      );
  };
}

export function getFollowsForAnyUser(username) {
  return function(dispatch) {
    dispatch({ type: GET_FOLLOWS_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${username}/follows/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch({
            type: GET_FOLLOWS_FAILURE,
            error: 'Cannot GET.',
            message: `Cannot get followings for ${username}.`
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({
            type: GET_FOLLOWS_SUCCESS,
            user: username,
            follows: data.following
          });
        }
      })
      .catch(error =>
        dispatch({ type: GET_FOLLOWS_FAILURE, error: 'network' })
      );
  };
}

export function getFollowersForAnyUser(username) {
  return function(dispatch) {
    dispatch({ type: GET_FOLLOWERS_REQUEST });
    return fetch(`${API_HOST_URL}/profiles/${username}/followers/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch({
            type: GET_FOLLOWERS_FAILURE,
            error: 'Cannot GET.',
            message: `Cannot get followers for ${username}.`
          });
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          dispatch({
            type: GET_FOLLOWERS_SUCCESS,
            user: username,
            followers: data.followers
          });
        }
      })
      .catch(error =>
        dispatch({ type: GET_FOLLOWERS_FAILURE, error: 'network' })
      );
  };
}
