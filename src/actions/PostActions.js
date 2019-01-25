import { FETCH_COMMENTS, NEW_COMMENT } from '../constants/ActionTypes';

const API_HOST_URL = process.env.API_URL;
const DEMO_TOKEN = window.localStorage.getItem('token');
export const fetchPosts = slug => dispatch => {
  return fetch(`${API_HOST_URL}/${slug}/comments/`, {
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${DEMO_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: posts
      })
    );
};

export const createPost = (slug, postData) => dispatch => {
  return fetch(`${API_HOST_URL}/${slug}/comments/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${DEMO_TOKEN}`
    },
    body: JSON.stringify({ comment: postData })
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_COMMENT,
        payload: post
      })
    );
};
