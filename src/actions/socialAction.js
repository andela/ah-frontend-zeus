import { GET_ERRORS, LOGIN_SUCCESS } from '../constants/ActionTypes';

const API_HOST_URL = process.env.API_URL;
export const responseGoogle = response => dispatch => {
  const token = { auth_token: response.tokenId };
  return fetch(`${API_HOST_URL}/social/auth/google/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify({ user: token })
  })
    .then(res => res.json())
    .then(data => {
      if (
        data.errors ||
        data.user.auth_token ===
          'A user with this email already exists, Please login'
      ) {
        dispatch({
          type: GET_ERRORS,
          payload: data
        });
        alert(data.user.auth_token);
      } else {
        localStorage.setItem('token', data.user.auth_token);
        localStorage.setItem('username', response.w3.ig);
        dispatch({ type: LOGIN_SUCCESS });
        window.location = '/articles';
      }
    });
};

export const responseFacebook = response => dispatch => {
  const token = { auth_token: response.accessToken };
  return fetch(`${API_HOST_URL}/social/auth/facebook/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify({ user: token })
  })
    .then(res => res.json())
    .then(data => {
      if (
        data.errors ||
        data.user.auth_token ===
          'A user with this email already exists, Please login'
      ) {
        dispatch({
          type: GET_ERRORS,
          payload: data
        });
        alert(data.user.auth_token);
      } else {
        localStorage.setItem('token', data.user.auth_token);
        localStorage.setItem('username', response.name);
        window.location = '/articles';
      }
    });
};
