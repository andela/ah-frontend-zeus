import { GET_ERRORS } from '../constants/ActionTypes';

export const passwordReset = email => {
  return function(dispatch) {
    return fetch(
      'https://zeus-staging.herokuapp.com/api/users/password_reset/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        CORS: 'no-cors',
        body: JSON.stringify({ user: email })
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data && data.user) {
          dispatch({
            type: GET_ERRORS,
            payload: data.user
          });
        }
      })
  };
};
