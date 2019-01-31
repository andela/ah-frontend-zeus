import {BOOK_MARKED_ARTICLES} from '../constants/ActionTypes';

const API_HOST_URL = process.env.API_URL;
let TOKEN =localStorage.getItem('token');
export const getBookMarkedArticles = () => dispatch => {
  return fetch(`${API_HOST_URL}/articles/bookmark/`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: BOOK_MARKED_ARTICLES,
        payload: response
      });
    });
};