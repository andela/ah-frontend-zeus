import { GET_ERRORS } from '../constants/ActionTypes';

export const registerUser = (userData, history) => dispatch => {
  fetch('https://zeus-staging.herokuapp.com/api/users/', {
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
  return fetch('https://zeus-staging.herokuapp.com/api/users/login/', {
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
