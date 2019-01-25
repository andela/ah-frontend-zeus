import { BOOK_MARK_ARTICLE } from '../constants/ActionTypes';

let DEMO_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZXhwIjoxNTQ4OTE2ODg0fQ.NYZZ8qEaKokt1R8o97um-2XQlIT3PYypCECSP1YOT4w';

export const getBookMarkedArticles = () => dispatch => {
  return fetch('https://zeus-staging.herokuapp.com/api/articles/bookmark/', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${DEMO_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: BOOK_MARK_ARTICLE,
        payload: response.article.results
      });
    });
};

export const bookmarkArticle = slug => {
  return fetch(`https://zeus-staging.herokuapp.com/api/articles/bookmark/${slug}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${DEMO_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log('response =+++++++++++++', res);
    })
    .catch(err => {
      console.log(err);
    });
};
