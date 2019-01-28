import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_ERRORS,
  GET_ARTICLES,
  GET_SINGLE_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE
} from '../constants/ActionTypes';

const token = window.localStorage.getItem('token');
const API_HOST_URL = process.env.API_URL;

export const getArticles = () => dispatch => {
  return fetch(`${API_HOST_URL}/articles/`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: GET_ARTICLES,
        payload: articles.article.results
      });
    });
};

export const getSingleArticle = slug => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(articles => {
      dispatch({
        type: GET_SINGLE_ARTICLE,
        payload: articles.article
      });
    });
};

export const addArticle = payload => dispatch => {
  return fetch(`${API_HOST_URL}/articles/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(response => {
      //check if response is successful? dispatch successAction
      //else if: response has errors? dispatch errorsAction
      if (response.article.errors) {
        dispatch({
          type: ADD_ARTICLE_ERRORS,
          payload: response
        });
      } else if (response.article.title) {
        dispatch({
          type: ADD_ARTICLE_SUCCESS,
          payload: response
        });
      }
    });
};

export const editArticle = (slug, payload) => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: payload })
  })
    .then(res => res.json())
    .then(response => {
      //check if response is successful? dispatch successAction
      //else if: response has errors? dispatch errorsAction
      if (response.article.errors) {
        dispatch({
          type: ADD_ARTICLE_ERRORS,
          payload: response
        });
      } else if (response.article.title) {
        dispatch({
          type: EDIT_ARTICLE,
          payload: response
        });
      }
    });
};

export const deleteArticle = slug => dispatch => {
  return fetch(`${API_HOST_URL}/articles/${slug}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    CORS: 'no-cors',
    body: JSON.stringify({ article: slug })
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: DELETE_ARTICLE,
        payload: response
      });
    });
};
