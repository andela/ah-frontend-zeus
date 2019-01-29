import { GET_ERRORS } from '../constants/ActionTypes';

const API_HOST_URL = process.env.API_URL;
export const registerUser = (userData, history) => dispatch => {
  fetch(`${API_HOST_URL}/users/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify({ user: userData })
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        dispatch({
          type: GET_ERRORS,
          payload: data
        });
      } else {
        history.push('/login');
      }
    });
};

export const loginUser = (userData, history) => dispatch => {
  return fetch(`${API_HOST_URL}/users/login/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    CORS: 'no-cors',
    body: JSON.stringify({ user: userData })
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        return dispatch({
          type: GET_ERRORS,
          payload: data.errors
        });
      } else {
        let token = data.user.token;
        let user = data.user.username;
        localStorage.setItem('token', token);
        localStorage.setItem('username', user);

        history.push('/articles');
        return true;
      }
    });
};
