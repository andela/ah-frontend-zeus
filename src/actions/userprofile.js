import { USER_PROFILE, EDIT_USER_PROFILE } from '../constants';

let TOKEN =localStorage.getItem('token');
const API_HOST_URL = process.env.API_URL;
export const getProfile = () => dispatch => {
  return fetch(`${API_HOST_URL}/users/profiles/`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: USER_PROFILE,
        payload: response
      });
    });
};

export const editProfile = profileInformation => dispatch => {
  return fetch(`${API_HOST_URL}/users/profiles/`, {
    method: 'PUT',
    body: JSON.stringify(profileInformation),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: EDIT_USER_PROFILE,
        payload: res
      });
    })
};

export const savePhoto = formData => dispatch => {
  const CLOUDNARY_URL = 'https://api.cloudinary.com/v1_1/dhmiym9kh/upload';
  return fetch(CLOUDNARY_URL, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(response => {
      localStorage.setItem('profile_url', response.secure_url);
    });
};
